import { styled } from '@stitches/react';

export const CustomerContainer = styled('div', {
    border: '1px solid #c9c9c957',
    padding: 20,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 750px)': {
        flexDirection: 'column',
    },
    '@media (min-width: 751px)': {
        flexDirection: 'row',
    },
})

export const FirstInfos = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: 215
})

export const SecondInfos = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})

export const StatusContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    '@media (max-width: 750px)': {
        justifyContent: 'center',
    },
})

export const ActionContainer = styled('div', {

})

export const Name = styled('div', {

})

export const Email = styled('div', {
    fontWeight: 200,
    color: '#afafaf',
})

export const Id = styled('div', {

})

export const AlertBall = styled('span', {
    height: 15,
    width: 15,
    borderRadius: 10,
    display: 'block',
    marginRight: 8,
})

export const Phone = styled('div', {
    fontWeight: 200,
    color: '#afafaf',
})

export const Status = styled('div', {
    fontWeight: 200,
    color: '#afafaf',
})
