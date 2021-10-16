import React from 'react'
import DineoutRestaurantListItem from './DineoutRestaurantListItem'

const DineoutRestaurantCard = () => {
    return (
        <div>
            <div className="lg:hidden">
                <h1 className="text-2xl font-semibold  mt-2">Dine-Out Restaurants in Kerala!</h1>

                <div className="flex flex-wrap justify-between gap-5 ">
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                </div>
            </div>
            <div className="hidden lg:block mx-28">
                <h1 className="text-2xl font-semibold  mt-10">Dine-Out Restaurants in Kerala!</h1>

                <div className="flex flex-wrap justify-between gap-2  ">
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                    <DineoutRestaurantListItem />
                </div>
            </div>
        </div>
    )
}

export default DineoutRestaurantCard
