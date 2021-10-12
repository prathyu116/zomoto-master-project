import React, { useEffect, useState } from 'react';
import './DDN.css'
import { NavLink,useHistory ,Route} from 'react-router-dom';


const DDN = () => {
    
const history = useHistory()
    return (
        <div className="container mx-auto flex items-center justify-start gap-20  mt-7">
            <NavLink exact  to='/delevary' activeClassName="active">
                <div className="flex items-center gap-2  border-b-2 border-zomato-300 h-32 ">
                    <div className="w-20 h-20 border-yellow-200 bg-yellow-100  rounded-full flex items-center justify-center">
                        <img className="w-1/2 h-1/2" src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" alt="" />
                    </div>
                    <h1 className="text-2xl text-zomato-300 hover:text-zomato-400">Delivary</h1>
                </div>
            </NavLink>
            <button onClick={()=>history.push('/ding')} >
                <div className={`flex items-center gap-2  h-32  hover:text-zomato-300  `}>
                    <div className="w-20 h-20  bg-gray-100  rounded-full flex items-center justify-center hover:bg-yellow-100">
                        <img className="w-1/2 h-1/2" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="" />
                    </div>
                    <h1 className="text-2xl ">Dining Out</h1>
                </div>
            </button>
            <NavLink exact  to='/night' activeClassName="active" >
                <div className="flex items-center gap-2   h-32 ">
                    <div className="w-20 h-20  bg-gray-100  rounded-full flex items-center justify-center">
                        <img className="w-1/2 h-1/2" src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="" />
                    </div>
                    <h1 className="text-2xl">NightLife</h1>
                </div>
            </NavLink>

        
        </div>
    )
}

export default DDN;


// <img className="w-full h-full" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp" alt="" />
