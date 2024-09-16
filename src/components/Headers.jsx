import { GrSearch } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { PiShoppingCartBold } from "react-icons/pi";
import { ImAmazon } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
//import { Home } from "../pages/Home";
import { useState, useEffect } from "react";
import axios from "axios";

export const Headers = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('Token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('Token');

        delete axios.defaults.headers.common['Authorization'];

        setIsLoggedIn(false);

        navigate('/');
    };

    return (
        <div className="min-h-[calc(10vh-10px)] ">
            <header className=" h-16 shadow-md pt-5 bg-black fixed w-full z-40">
                <div className="h-full container mx-auto flex justify-between items-center px-4 gap-2">
                    <div className="flex items-center space-x-2">
                        <div className="relative p-2">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                            <div className="w-11 relative sm:w-32 flex items-center justify-evenly h-11 bg-white text-black rounded-full">
                                {/* Link to Home for ImAmazon icon */}
                                <Link to="/" className="flex items-center justify-center">
                                    <ImAmazon className="text-3xl cursor-pointer" />
                                </Link>
                                {/* Link to Home for Abdul text */}
                                <Link to="/" className="hidden sm:inline text-2xl font-bold">
                                    Abdul
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden md:flex p-[3px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                        <div className="relative flex items-center w-full justify-between max-w-sm border rounded-full bg-white text-black">
                            <input
                                type="text"
                                placeholder="search product here"
                                className="w-full outline-none px-6 py-2 rounded-full bg-transparent"
                            />
                            <div className="font-extrabold text-black text-2xl min-w-[50px] h-8 flex items-center justify-center rounded-full">
                                <GrSearch />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="relative p-[3px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
                                <FiUsers className="text-3xl cursor-pointer" />
                            </div>
                        </div>

                        <div className="relative p-[3px] w-10 h-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                            <div className="relative flex items-center justify-center w-full h-full rounded-full bg-white text-black">
                                <span className="text-3xl cursor-pointer">
                                    <PiShoppingCartBold />
                                </span>
                                <div className="absolute -top-2 -right-2 bg-white text-black w-5 h-5 rounded-full p-1 flex items-center justify-center">
                                    <p className="text-xs font-bold">0</p>
                                </div>
                            </div>
                        </div>
                        {isLoggedIn ? (
                            <button className="p-[3px] relative" onClick={handleSignOut}>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                <div className="px-5 py-2 bg-black rounded-full relative group transition duration-200 text-white hover:bg-transparent">
                                    Sign Out
                                </div>
                            </button>
                        ) : (
                            <Link to="/signin">
                                <button className="p-[3px] relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                    <div className="px-5 py-2 bg-black rounded-full relative group transition duration-200 text-white hover:bg-transparent">
                                        Sign In
                                    </div>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};
