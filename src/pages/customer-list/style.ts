import { styled } from '@stitches/react';

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

