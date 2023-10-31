import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar";


const Dashboard = () => {
    return (
        <div className="w-11/12 mx-auto">
            <nav><Navbar></Navbar></nav>
            <main className="grid grid-cols-12 gap-5 min-h-screen my-12">
        {/* manu */}
        <div className="bg-yellow-100 col-span-3 h-full flex flex-col items-center ">
            <NavLink  to={'/dashboard'} className={"w-full text-center p-2 my-2 font-bold hover:text-orange-400"}>Home</NavLink>
            <NavLink to={'/dashboard/addProduct'} className={"w-full text-center p-2 my-2 border-stone-400 font-bold hover:text-orange-400"}>Add Product</NavLink>
            <NavLink to={'/dashboard/manageProduct'} className={"w-full text-center p-2 my-2 font-bold hover:text-orange-400"}>Manage Product</NavLink>
            <NavLink to={'/dashboard/addCategory'} className={" w-full text-center p-2 my-2  font-bold hover:text-orange-400"}>Add Category</NavLink>
            <NavLink to={'/dashboard/manageCategory'} className={" w-full text-center p-2 my-2 font-bold hover:text-orange-400"}>Manage Category</NavLink>
        </div>
        <div className=" col-span-9 h-full"><Outlet></Outlet></div>
            </main>
        </div>
    );
};

export default Dashboard;