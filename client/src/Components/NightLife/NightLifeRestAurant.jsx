import React from 'react'
import NightRestaurantList from './NightRestaurantList'

const NightLifeRestAurant = () => {
    return (
        <div>
            <div className="lg:mx-28">
                <h1 className="text-xl font-semibold  mt-2">Night Life Restaurant In Kerala!</h1>

                <div className="flex flex-wrap justify-between">
                    <NightRestaurantList />
                    <NightRestaurantList />
                    <NightRestaurantList />
                    <NightRestaurantList />
                    <NightRestaurantList />
                    <NightRestaurantList />
                    <NightRestaurantList />
                </div>
            </div>
        </div>
    )
}

export default NightLifeRestAurant
