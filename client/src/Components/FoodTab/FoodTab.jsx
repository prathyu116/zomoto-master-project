import React, { useState } from 'react';
import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline } from "react-icons/io5";
import { GiMorgueFeet } from "react-icons/gi";
import { useParams } from 'react-router';

const MobTab = () => {
    const [allType, setAllType] = useState([
        {
            id: "delivary",
            icon: <BsHandbag />,
            name: "Delevary",
            isActive: false
        },
        {
            id: "night",
            icon: <IoBeerOutline />,
            name: "Night Life",
            isActive: false
        },
        {
            id: "dining",
            icon: <GiMorgueFeet />,
            name: "Dining Out",
            isActive: false
        },
    ])
    const { type } = useParams();
    useEffect(() => {
        if(type){
            const updateTypes =allType.map((item)=>{
                if(item.id===type){
                    return { ...item,isActive:true}
                }
            })
        }
        
    }, [type])

    return (
        <>
            <div className="lg:hidden bg-white border p-3 fixed bottom-0 z-10 w-full flex items-center justify-between text-gray-400">
                <div className="flex flex-col items-center text-xl">
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
                </div>


            </div>
        </>
    )

}

const FoodTab = () => {
    return (
        <>
            <div>
                <MobTab />
            </div>
        </>
    )
}

export default FoodTab;
