import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Button from ".";

describe('Button', () => {
    it('deveria renderizar o botao com o texto passado por param', function () {
        render(<Button placeholder="Botão teste unitário" type={undefined} />)

        const button = screen.getByText('Botão teste unitário')

        expect(button).toBeInTheDocument()
    });
})