import { useEffect } from "react";
import { FormNewUser } from "../components/FormNewUser";
import { HeaderListUser } from "../components/HeaderListUser";


export const NewUser = () => {

    return (
        <>
            <HeaderListUser
                title="Novo usuário"
                subTitle="Informe os campos a seguir para criar novo usuário"
                buttonNewUser={false} />
            <FormNewUser />
        </>
    )
}

export default NewUser;