import React from 'react';
import { styled } from '@stitches/react';

interface Props {
    clickOn?: any;
    placeholder: string;
    edit?: boolean;
    color?: string;
    type: 'submit' | 'button' | undefined
}

const Button = (props: Props) => {

    const {
        clickOn, placeholder, edit, color, type
    } = props;

    const EditButton = styled('button', {
        borderRadius: 6,
        fontSize: edit ? 16 : 14,
        backgroundColor:  color || (edit ? '#fff' : '#e29933'),
        color: !color && edit ? '#e29933' : '#fff',
        border: '1px solid #e29933',
        padding: '9px 16px',
        height: edit && 50,
        cursor: 'pointer',
        minWidth: edit && 150,
        '&:hover': edit && {
            backgroundColor: '#e29933',
            color: '#fff',
            border: '1px solid #e29933'
        }
    })
    return (
        <EditButton onClick={clickOn} type={type}>
            {placeholder}
        </EditButton>
    );
};

export default Button;
