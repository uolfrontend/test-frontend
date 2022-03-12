import { useEffect, useState } from 'react';
import styles from './status.module.scss';

export interface StatusUserProps{
    statusType: string;
}


export interface StatusUserExit{
    cicle: string;
    textStatus: string;
}


export const useStatusUser = (props: StatusUserProps): StatusUserExit => {
    const [cicle,setCicle] = useState('');
    const [textStatus,setTextStatus] = useState('');

    useEffect(() => {
        switch(props.statusType){
            case "active":
                return setCicle(styles.statusAtivo), setTextStatus('Ativo');
            case "inactive":
                return setCicle(styles.statusInativo), setTextStatus('Inativo');
            case "waiting":
                return setCicle(styles.statusAguardando), setTextStatus('Aguardando Ativação');
            case "disabled":
                return setCicle(styles.statusDesativo), setTextStatus('Desativado');
        }
    }, [])

    return {cicle,textStatus}

}