import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
//Component
import FoodTab from '../Components/FoodTab/FoodTab';
import Navbar from '../Components/Navbar/Navbar';

//redux actions
import {getRestaurant } from '../Redux/Reducer/Restaurant/RestaurantAction'
const HomeLayout = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        // dispatch = useDispatch()
    },[])

    return (
        <>
            <div className="lg:container-mx-auto lg:px-20 ">
                <Navbar />



            </div>
            <FoodTab />
            {props.children}
        </>
    )
}

export default HomeLayout;
