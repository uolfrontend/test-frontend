import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";

interface ToastProviderProps {
    children: ReactNode;
}

interface IToastConfig {
    message: string;
    trigger: boolean;
    option: "success" | "info" | "warning" | "error";
}

interface ToastContextData {
    toastConfig: IToastConfig;
    setToastConfig: Dispatch<SetStateAction<IToastConfig>>;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export function ToastProvider({ children }: ToastProviderProps) {
    const [toastConfig, setToastConfig] = useState<IToastConfig>({
        message: "Página Carregada com Sucesso",
        option: "success",
        trigger: false,
    });

    useEffect(() => {
        if (toastConfig.trigger === true) {
            setToastConfig({ ...toastConfig, trigger: false });
        }
    }, [toastConfig]);

    return (
        <ToastContext.Provider value={{ toastConfig, setToastConfig }}>
            {children}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    return context;
}
