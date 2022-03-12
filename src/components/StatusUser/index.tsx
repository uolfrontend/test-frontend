import styles from './status.module.scss';
import { StatusUserProps, useStatusUser } from './statusUser.hooks';



export const StatusUser = (props: StatusUserProps) => {

    const { cicle, textStatus } = useStatusUser(props);

    return (
        <>
            <div className={styles.divStatusUser}>
                <div className={cicle} />
                <p>{textStatus}</p>
            </div>
        </>
    )
}