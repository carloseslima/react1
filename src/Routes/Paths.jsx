import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Produtos from "../pages/Produtos.jsx";
import Header from "../components/Header.jsx";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/produtos" element={<Produtos />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;