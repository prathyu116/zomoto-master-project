import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LGData } from './LgFoodTabData';
import { MobData } from './MobFoodTabData';
import { MdData } from './MdFoodTabData';

//Mbile Tab
const MobTab = () => {
    const { type } = useParams();
    return (
        <>
            <div className="lg:hidden bg-white border p-3 fixed bottom-0 z-10 w-full flex items-center justify-between text-gray-400">
                {/* <div className="flex flex-col items-center text-xl">
                    <BsHandbag />
                    <h5>Delivary</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <GiMorgueFeet />

                    <h5>Dining Oute</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <IoBeerOutline />
                    <h5>Night Life</h5>
                </div> */}
                {
                    MobData.map((items) => (
                        <Link to={`/${items.id}`}>
                            <div
                                className={
                                    type === items.id
                                        ? "flex flex-col relative items-center text-xl text-zomato-400 "
                                        : "flex flex-col items-center text-xl "
                                }
                            >
                                <div
                                    className={
                                        type === items.id &&
                                        "absolute -top-3 w-full h-2 border-t-2 border-zomato-400  "
                                    }
                                />
                                <div className="text-4xl "> {items.icon}</div>
                                <h5 className="text-lg">{items.name}</h5>
                            </div>
                        </Link>



                    ))}


            </div>
        </>
    )

}
//Large SCR function
const LgTab = () => {
    const { type } = useParams();
    return (
        <>
            <div className="w-full px-20 py-2 flex   items-center justify-start  gap-20  mt-7 border-b">
                {
                    LGData.map((items) => {
                        return (
                            <Link to={`/${items.id}`}>
                                <div
                                    className={
                                        type === items.id
                                            ? "flex flex-row relative items-center gap-4  text-xl text-zomato-400 "
                                            : "flex flex-row items-center text-xl gap-4 "
                                    }
                                >
                                    <div
                                        className={
                                            type === items.id &&
                                            "absolute top-20 w-full h-2 border-b-2 border-zomato-400  transition-all   "
                                        }
                                    />
                                    <div className={
                                        type === items.id
                                        ?"w-20 h-20  bg-yellow-100  rounded-full flex items-center justify-center  transition-all"
                                        :"w-20 h-20  bg-gray-100  rounded-full flex items-center justify-center transition-all"
                                    }>
                                        <img className="w-1/2 h-1/2" src={items.icon} alt="icons" />
                                    </div>
                                    <h5 className="text-2lg">{items.name}</h5>
                                </div>
                            </Link>
                        )


                    })
                }




            </div>
        </>
    )

}

const MdTab = () => {
    const { type } = useParams();

    return (
        <>
            <div className="lg:hidden bg-white border p-3 fixed bottom-0 z-10 w-full flex items-center justify-around text-gray-400">
                 {
                    MdData.map((items) => (
                        <Link to={`/${items.id}`}>
                            <div
                                className={
                                    type === items.id
                                        ? "flex flex-col relative items-center text-3xl text-zomato-400 "
                                        : "flex flex-col items-center text-3xl "
                                }
                            >
                                <div
                                    className={
                                        type === items.id &&
                                        "absolute -top-3 w-full h-2 border-t-2 border-zomato-400  "
                                    }
                                />
                                <div className="text-4xl "> {items.icon}</div>
                                <h5 className="text-lg">{items.name}</h5>
                            </div>
                        </Link>



                    ))}
            </div>
        </>

    )
}

const FoodTab = () => {
    return (
        <>
            <div className="md:hidden ">
                <MobTab />
            </div>
            <div>
                <div className="hidden lg:hidden  md:block ">
                    {
                        // Tablet Screen
                        <MdTab />

                    }

                </div>
                <div className="hidden lg:block  mx-12">
                    {
                        // Tablet Screen
                        <LgTab />

                    }

                </div>
            </div>
        </>
    )
}

export default FoodTab;
