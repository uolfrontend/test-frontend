import { styled, keyframes } from '@stitches/react';

export const DescriptionContainer = styled('div', {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: '35px 0',
    height: 70,
})

export const Description = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

export const ActionContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    marginRight: 22,
    width: 320,
    justifyContent: 'space-between',
    marginTop: 50,
})

export const DescriptionTitle = styled('span', {
    fontWeight: 500,
    color: '#6b727a',
    fontSize: 20,
})

export const DescriptionSubtitle = styled('span', {
    fontWeight: 200,
    color: '#afafaf',
    fontSize: 16,
})

export const FormContainer = styled('section', {
    width: '100%',
})

export const InputForm = styled('form', {
    display: 'flex',
    flexDirection: 'column',
})

export const Input = styled('input', {
    border: '1px solid #afafaf',
    borderRadius: 4,
    height: 50,
    width: '15rem',
    padding: '0px 18px',
    fontSize: 16,
    '&::placeholder': {
        fontSize: 16
    },
    marginBottom: 20,
})

export const Select = styled('select', {
    border: '1px solid #afafaf',
    borderRadius: 4,
    height: 50,
    width: 'calc(16rem + 22px)',
    padding: '0px 18px',
    fontSize: 16,
    '&::placeholder': {
        fontSize: 16
    },
    marginBottom: 20,
})
