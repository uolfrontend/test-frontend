import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Header from ".";

describe('header', () => {
    it('deveria renderizar o customer list', function () {
        render(<Header />)

        const header = screen.getByTestId('header')

        expect(header).toBeInTheDocument()
    });

    it('deveria ter a logo da uol', function () {
        render(<Header />)

        const headerSrc = screen.getByRole('img').getAttribute('src')

        expect(headerSrc).toBe('http://localhost:3000/src/img/uol-white.png')
    });
})