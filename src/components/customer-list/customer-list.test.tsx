import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import CustomersList from ".";


describe('customer list', () => {
    it('deve renderizar o customer list', function () {
        render(<CustomersList testing={true} />)

        const customerList = screen.getByTestId('customer-list')

        expect(customerList).toBeInTheDocument()
    });
})