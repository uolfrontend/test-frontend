import React, {useState} from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import {MyAlertDialog} from ".";

describe('alert', () => {
    it('deveria renderizar o alert com o title passado por param', function () {
        let open = true;

        render(<MyAlertDialog
            title="Teste unitário"
            openAlert={open}
            onOpenChange={() => open = false}
            description="aqui deve haver uma modal"
        />)

        const alert = screen.getByText('Teste unitário')

        expect(alert).toBeInTheDocument()
    });

    it('deveria renderizar a modal com a descrição passada por param', function () {
        let open = true;

        render(<MyAlertDialog
            title="Teste unitário"
            openAlert={open}
            onOpenChange={() => open = false}
            description="aqui deve haver uma modal"
        />)

        const alert = screen.getByText('aqui deve haver uma modal')

        expect(alert).toBeInTheDocument()
    });
})