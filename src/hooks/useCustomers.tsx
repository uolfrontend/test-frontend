import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { ICustomerDTO } from "../dtos/ICustomerDTO";
import api from "../services/api";
import { db } from "../services/db";
import { useToast } from "./useToast";

interface CustomersProviderProps {
    children: ReactNode;
}

interface ICustomersContextData {
    customers: ICustomerDTO[];
    createCustomer: (customer: ICustomerDTO) => Promise<void>;
    editCustomer: (customer: ICustomerDTO) => Promise<void>;
}

const CustomersContext = createContext<ICustomersContextData>(
    {} as ICustomersContextData
);

export function CustomersProvider({ children }: CustomersProviderProps) {
    const { setToastConfig } = useToast();

    db.open().catch((err) => {
        setToastConfig({
            //@ts-ignore
            message: err?.message
                ? //@ts-ignore
                  err?.message
                : "Por favor tente novamente mais tarde",
            option: "error",
            trigger: true,
        });
    });

    const [customers, setCustomers] = useState<ICustomerDTO[]>([]);

    const getFirstCustomersLoader = useCallback(async () => {
        try {
            const { data } = await api.get("/customers.json");
            if (data.customers) {
                // setCustomers(data.customers);
                db.customers
                    .bulkAdd([...data.customers])
                    .then(() => {
                        setToastConfig({
                            message: `Primeiro carregamento feito com sucesso!`,
                            option: "success",
                            trigger: true,
                        });
                    })
                    .catch((error) => {
                        setToastConfig({
                            //@ts-ignore
                            message: error?.message
                                ? //@ts-ignore
                                  error?.message
                                : "Por favor tente novamente mais tarde",
                            option: "error",
                            trigger: true,
                        });
                    });
            }
        } catch (error) {
            setToastConfig({
                //@ts-ignore
                message: error?.message
                    ? //@ts-ignore
                      error?.message
                    : "Por favor tente novamente mais tarde",
                option: "error",
                trigger: true,
            });
        }
    }, [setToastConfig]);

    const getCustomers = useCallback(async () => {
        try {
            let allCustomers = await db.customers.toArray();

            if (!allCustomers.length) {
                getFirstCustomersLoader();
            } else {
                setCustomers(allCustomers);
                setToastConfig({
                    message: `Clientes recuperados com sucesso!`,
                    option: "success",
                    trigger: true,
                });
            }
        } catch (error) {
            setToastConfig({
                //@ts-ignore
                message: error?.message
                    ? //@ts-ignore
                      error?.message
                    : "Por favor tente novamente mais tarde",
                option: "error",
                trigger: true,
            });
        }
    }, [getFirstCustomersLoader, setToastConfig]);

    const createCustomer = useCallback(
        async (customer: ICustomerDTO) => {
            try {
                if (
                    customer.id &&
                    customer.name &&
                    customer.email &&
                    customer.phone &&
                    customer.status
                ) {
                    db.customers
                        .add(customer)
                        .then(async () => {
                            await getCustomers();
                            setToastConfig({
                                message: `Cliente adicionado com sucesso!`,
                                option: "success",
                                trigger: true,
                            });
                        })
                        .catch((error) => {
                            setToastConfig({
                                //@ts-ignore
                                message: error?.message
                                    ? //@ts-ignore
                                      error?.message
                                    : "Por favor tente novamente mais tarde",
                                option: "error",
                                trigger: true,
                            });
                        });
                }
            } catch (error) {
                setToastConfig({
                    //@ts-ignore
                    message: error?.message
                        ? //@ts-ignore
                          error?.message
                        : "Por favor tente novamente mais tarde",
                    option: "error",
                    trigger: true,
                });
            }
        },
        [getCustomers, setToastConfig]
    );

    const editCustomer = useCallback(
        async (customer: ICustomerDTO) => {
            try {
                await db.customers.put(customer);

                setToastConfig({
                    message: `Cliente editado com sucesso!`,
                    option: "success",
                    trigger: true,
                });
                getCustomers()
            } catch (error) {
                setToastConfig({
                    //@ts-ignore
                    message: error?.message
                        ? //@ts-ignore
                          error?.message
                        : "Por favor tente novamente mais tarde",
                    option: "error",
                    trigger: true,
                });
            }
        },
        [getCustomers, setToastConfig]
    );

    useEffect(() => {
        if (!customers.length) {
            getCustomers();
        }
    }, [customers, getCustomers]);

    return (
        <CustomersContext.Provider
            value={{
                customers,
                createCustomer,
                editCustomer,
            }}
        >
            {children}
        </CustomersContext.Provider>
    );
}

export function useCustomers() {
    const context = useContext(CustomersContext);
    return context;
}
