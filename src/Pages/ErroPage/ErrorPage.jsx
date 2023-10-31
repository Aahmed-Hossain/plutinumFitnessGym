/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <h1 className="text-center font-bold text-6xl"> I'm Error Page</h1>
            <Link to={'/'}><button className="px-4 py-2 rounded-xl flex mx-auto my-12 font-semibold bg-red-300 ">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;