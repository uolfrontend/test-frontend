import { ButtonApp } from '../ButtonApp';
import Link from 'next/link';
import styles from './listUser.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { customersDB } from '../../data/customers';
import { StatusUser } from '../StatusUser';
import { Customers } from '../../models/customers.model';
import { ListUserProps, useListUser } from './listUser.hooks';

export const ListUser = (props: ListUserProps) => {

    const { items, onClickTeste } = useListUser(props)

    return (
        <>
            <div>
                <div className={styles.divList}>
                    {items.map((x) => (
                        <>
                            <div className={styles.listUserDiv} >
                                <p>
                                    <h1>{x.name}</h1>
                                    <p>{x.email}</p>
                                </p>
                                <p>
                                    <h1>{x.id}</h1>
                                    <p>{x.phone}</p>
                                </p>
                                <span>
                                    <StatusUser statusType={x.status} />
                                </span>
                                {/* <Link href={'./newuser'}> */}

                                {/* <button onClick={onClickTeste} data-name={x.name} data-id={x.id} data-email={x.email} data-phone={x.phone} data-status={x.status}>
                                    test
                                </button> */}
                                {/* </Link> */}

                                <Link href={'./newuser'}>
                                    <a>
                                        <ButtonApp text='Editar' backgroundColor={false} onClickTeste={onClickTeste} />
                                    </a>
                                </Link>
                            </div>
                        </>
                    ))}
                    <p className={styles.pList} >Exibindo {items.length} clientes</p>
                </div>
            </div>
        </>
    )
}