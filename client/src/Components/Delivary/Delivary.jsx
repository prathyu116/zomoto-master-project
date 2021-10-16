import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DelevaryCarousal from './DelevaryCarousal';

const Delivary = () => {
    // const [restaurantlist, setRestaurantList] = useState([]);

    // const reduxState = useSelector(
    //     (globalStore) => globalStore.restaurant.restaurants
    // );
    // useEffect(() => {
    //     setRestaurantList(reduxState.restaurants)
    // }, [reduxState.restaurants])
    return (
        <>
            <DelevaryCarousal />
        </>
    )
}

export default Delivary;
