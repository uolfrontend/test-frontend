import React, { useCallback, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { useToast } from "../../hooks/useToast";

/**Criar hook disso */
const Toast: React.FC = () => {
    const { toastConfig } = useToast();
    const addNotification = useCallback(() => {
        toast(toastConfig.message, {
            type: toastConfig.option,
        });
    }, [toastConfig.message, toastConfig.option]);

    useEffect(() => {
        if (toastConfig.trigger) {
            addNotification();
        }
    }, [addNotification, toastConfig.trigger]);

    return (
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export { Toast };
