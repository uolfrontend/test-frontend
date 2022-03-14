import React from 'react'
import { useContext } from 'react'
import UsersContext from '../../context/UsersContext'

function UsersCount() {

    const { userData } = useContext(UsersContext)

    if (userData.length >= 0) {
        return (
            <div className='usersData info'>
                <p className='text'>Exibindo {userData.length} clientes</p>
            </div>
        )
    }
}

export default UsersCount