import React from 'react';
//Component

import DDN from '../Components/DDN/DDN';
import FoodTab from '../Components/FoodTab/FoodTab';
import Navbar from '../Components/Navbar/Navbar';

const HomeLayout = (props) => {
    return (
        <>
            <div className="container-mx-auto lg:px-20">
               <Navbar />
               {/* <DDN /> */}
               
                {props.children}
            </div>
            <FoodTab />
        </>
    )
}

export default HomeLayout;
