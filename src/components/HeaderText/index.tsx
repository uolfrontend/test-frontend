import { FiUser } from 'react-icons/fi';
import styles from './headerText.module.scss';

export const HeaderText = () => {
    return (
        <>
            <div className={styles.headerTextComponents}>
                <div>
                    <FiUser />
                    <h1>Painel de Clientes</h1>
                </div>
                <hr style={{ border: 'none', height: '1.5px', backgroundColor: '#efefef' }} />
            </div>
        </>
    )
}