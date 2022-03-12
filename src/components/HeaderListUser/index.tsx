import styles from './headerListUser.module.scss';
import Link from 'next/link';
import { ButtonApp } from '../ButtonApp';


interface HeaderListUserProps {
    title: string;
    subTitle: string;
    buttonNewUser: boolean;
}

export const HeaderListUser = (props: HeaderListUserProps) => {
    return (
        <>
            <div className={styles.headerListUser}>
                <div>
                    <p>
                        <h1>{props.title}</h1>
                        <p>{props.subTitle}</p>
                    </p>
                    {props.buttonNewUser ? (
                        <Link href={'./newuser'}>
                            <a>
                                <ButtonApp text='Novo cliente' backgroundColor={true} />
                            </a>
                        </Link>
                    ) : (null)}
                </div>
            </div>
        </>
    )
}