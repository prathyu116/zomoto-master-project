import React from 'react';
//Component
import Navbar from '../Components/Navbar/Navbar';

const HomeLayout = (props) => {
    return (
        <>
            <div className="container-mx-auto lg:px-20">
               <Navbar />
                {props.children}
            </div>
        </>
    )
}

export default HomeLayout;
