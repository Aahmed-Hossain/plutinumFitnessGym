import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;