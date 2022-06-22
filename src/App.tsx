import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Headline } from "./components/Headline";
import { Toast } from "./components/Toast";
import { CustomersProvider } from "./hooks/useCustomers";
import { ToastProvider } from "./hooks/useToast";
import { MainRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
    return (
        <BrowserRouter>
            <ToastProvider>
                <CustomersProvider>
                    <div className="App">
                        <Header />
                        <Headline />
                        <MainRoutes />
                        <GlobalStyle />
                        <Toast />
                    </div>
                </CustomersProvider>
            </ToastProvider>
        </BrowserRouter>
    );
}

export default App;
