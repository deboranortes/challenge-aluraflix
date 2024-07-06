import PaginaPadrao from "./componentes/PaginaPadrao";
import NovoVideo from "pages/NovoVideo";
import PaginaInicial from "pages/PaginaInicial";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao/>}>
                    <Route index element={<PaginaInicial/>}/>
                    <Route path="novovideo" element={<NovoVideo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;