import { useCallback } from 'react';
import styles from './buttonApp.module.scss';



interface ButtonAppProps {
    text: string;
    backgroundColor: boolean;
    type?: 'submit';
    onClickTeste?: (ev: any) => void;
}

export const ButtonApp = (props: ButtonAppProps) => {


    return (
        <>
            <button
                type={props.type}
                onClick={props.onClickTeste}
                className={props.backgroundColor ? styles.buttonBackGroundColor : styles.buttonNotBackgroundColor}>
                {props.text}
            </button>
        </>
    )
}