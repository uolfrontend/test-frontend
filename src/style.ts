import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    padding: '11vh 10% 0'
})

export const Title = styled('div', {
    fontSize: '1.5rem',
    marginBottom: 20,
})

export const Divider = styled('div', {
    height: 1,
    width: '100%',
    backgroundColor: '#d5d5d5'
})

export const TitleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
})
