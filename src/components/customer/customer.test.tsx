import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {
    BrowserRouter as Router,
} from "react-router-dom";

import Customer from ".";

describe('customer', () => {
    it('deveria renderizar o customer', function () {
        const customer = {
            id: "094.598.879.61",
            name: "Claudemir Avelino Junior",
            email: "teste@teste.com",
            phone: "(47) 999999999",
            status: "active",
        }


        render(
            <Router>
                <Customer customer={customer} />
            </Router>
        )

        const customerRender = screen.getByTestId('customer')

        expect(customerRender).toBeInTheDocument()
    });
})