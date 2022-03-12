import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import { Customers } from "../../models/customers.model";

export interface ListUserProps {
    data: Customers[];
}

export interface ListUserExit {
    items: Customers[];
    onClickTeste: MouseEventHandler<HTMLButtonElement>;
}

export const useListUser = (props: ListUserProps): ListUserExit => {

    const [items, setItems] = useState<Customers[]>([]);
    const [itemsu, setItemsu] = useState({});

    useEffect(() => {
        const storageItem = localStorage.getItem("customersDB")
        const jsonItem = JSON.parse(storageItem as any)
        if (jsonItem == null) {
            setItems(props.data);

        } else {
            setItems(jsonItem);
        }
    }, [])

const onClickTeste: React.MouseEventHandler<HTMLButtonElement> = useCallback((
    ev
) => {
    let dataset = (ev.target as HTMLButtonElement).dataset
    setItemsu({
        id: dataset['id'],
        name: dataset['name'],
        email: dataset['email'],
        phone: dataset['phone'],
        status: dataset['status']
    })
    console.log(itemsu)
}, [itemsu, items])

    return{
        items,
        onClickTeste
    }
}

