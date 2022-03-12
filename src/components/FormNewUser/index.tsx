import { BiErrorCircle } from "react-icons/bi"
import styles from './formNewUser.module.scss';
import { ButtonApp } from "../ButtonApp";
import Link from "next/link";
import { useFormNewUser } from "./formNewUser.hooks";
import InputMask from 'react-input-mask';





export const FormNewUser = () => {

    const { errors, onSubmit, register, handleSubmit } = useFormNewUser()

    return (
        <>
            <div className={styles.divFormNewUser}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} type='text' placeholder="Nome" />
                    <input {...register("email")} type='email' placeholder="E-mail" style={{ marginTop: '5px' }} />
                    <InputMask mask={"999.999.999-99"} placeholder="CPF" {...register("id")} />
                    <InputMask mask={"(99)99999-9999"} placeholder="Telefone"  {...register("phone")} />
                    <select  {...register("status")}>
                        <option disabled selected hidden style={{ color: '#a2a3a0' }}>Status</option>
                        <option value="active">Ativo</option>
                        <option value="inactive">Inativo</option>
                        <option value="waiting">Aguardando ativação</option>
                        <option value="disabled">Desativado</option>
                    </select>
                    <p style={{ color: 'red' }}>{errors.status?.message}</p>
                    <div style={{ marginTop: '20px' }}>

                        <ButtonApp text='Criar' backgroundColor={true} type='submit' />
                        <Link href={'/'}>
                            <a>
                                <ButtonApp text='Voltar' backgroundColor={false} />
                            </a>
                        </Link>
                    </div>
                </form>


            </div>
            <div className={styles.divError}>
                <div className={styles.errorMensage} data-aos="fade-down">
                    {errors.name &&
                        <div >
                            <span>
                                <BiErrorCircle />
                                <p>{errors.name?.message}</p>
                            </span>
                        </div>
                    }
                </div>
                <div className={styles.errorMensage} data-aos="fade-down">
                    {errors.email &&
                        <div >
                            <span>
                                <BiErrorCircle />
                                <p>{errors.email?.message}</p>
                            </span>
                        </div>
                    }
                </div>
                <div className={styles.errorMensage} data-aos="fade-down">
                    {errors.id &&
                        <div >
                            <span>
                                <BiErrorCircle />
                                <p>{errors.id?.message}</p>
                            </span>
                        </div>
                    }
                </div>
                <div className={styles.errorMensage} data-aos="fade-down">
                    {errors.phone &&
                        <div >
                            <span>
                                <BiErrorCircle />
                                <p>{errors.phone?.message}</p>
                            </span>
                        </div>
                    }
                </div>
            </div>
        </>

    );
}