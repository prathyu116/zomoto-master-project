import React from 'react';
//Component
import FoodTab from '../Components/FoodTab/FoodTab';
import Navbar from '../Components/Navbar/Navbar';

const HomeLayout = (props) => {
    return (
        <>
            <div className="container-mx-auto lg:px-20 ">
               <Navbar />
             
               
              
            </div>
            <FoodTab />
            {props.children}
        </>
    )
}

export default HomeLayout;
