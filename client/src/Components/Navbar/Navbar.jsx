import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const MobileNav = () => {
    return (<>
        <div className="items-center justify-between flex w-full md:hidden">
            <div className="w-28">
                <img
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full"
                />
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
                <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                    <FaPizzaSlice />
                </span>
            </div>
        </div>
    </>);
};
const MdNav = () => {
    return (<>
        <div className="items-center justify-between flex w-full ">
            <div className="w-28">
                <img
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full"
                />
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
                <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                    <FaPizzaSlice />
                </span>
            </div>
        </div>
    </>);
};
const LgNav = () => {
    return (<>
        <div className="flex items-center justify-start gap-7  w-full ">
            <div className="w-28">
                <img
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full"
                />
            </div>
            <div className="w-3/5	 h-16	 flex items-center bg-white gap-2 px-3 py-2 shadow-lg border-2 rounded-lg relative">
                <div className="w-96 h-8 flex items-center  gap-2">
                    <span className="h-8 w-8 text-zomato-400 ">
                        <HiOutlineLocationMarker className="h-full w-full" />
                    </span>


                    <div className="relative w-full h-full">
                        <input type="text" className="w-full h-full border-r-2 outline-none" placeholder="3rd mile Bus Stop,periya" />

                        <AiFillCaretDown className=" absolute right-2 bottom-1" />
                    </div>
                </div>
                <div className="w-full h-8 flex items-center  gap-2">
                    <span className="h-8 w-6">
                    <BiSearch className="h-full w-full"/>
                    </span>
                   

                    <input type="search" className="w-full h-full border-none outline-none" placeholder="Search for restaurant,cusine or dishes place" />

                </div>


            </div>
            <div className="flex items-center  gap-3 ml-20">
                <span className="h-12 w-12 border p-2 border-blue-300 bg-blue-200 text-blue-400 rounded-full">
                    <FaPizzaSlice className="h-full w-full"/>
                </span>
                <span className="text-black flex flex-row  items-center gap-1  cursor-pointer">
                   <h3 className="text-lg text-gray">Prathyu</h3> 
                   <span className="w-6 h-8 text-gray">
                   <BiChevronDown className="w-full h-full " />
                   </span>
                </span>
            </div>
        </div>
    </>);
};

const Navbar = () => {
    return (
        <>
            <nav className="p-4  bg-white items-center">
               
               
                <div className="md:hidden  ">
                    {
                        // Mobile Screen
                        <MobileNav />

                    }

                </div>
                <div className="hidden lg:hidden  md:block ">
                    {
                        // Tablet Screen
                        <MdNav />

                    }

                </div>
                <div className="hidden lg:block ">
                    {
                        // desktop Screen
                        <LgNav />

                    }

                </div>
            </nav>
        </>
    )

};

export default Navbar;