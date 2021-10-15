import React from 'react'
import BestFoodCategory from './BestFoodCategory'

const BestFoodCarousal = () => {
    return (
        <>
        <div className="lg:hidden">
        <h1 className="text-xl font-semibold  mt-2">Best Food In Kerala!</h1>

        <div className="flex flex-wrap justify-between gap-5 ">
              <BestFoodCategory />
              <BestFoodCategory />
              <BestFoodCategory />
              <BestFoodCategory />
              <BestFoodCategory />

            </div>
        </div>
        <div className="hidden lg:block mx-28">
        <h1 className="text-xl font-semibold  mt-10">Best Food In Kerala!</h1>

        <div className="flex flex-wrap justify-between gap-2  ">
              <BestFoodCategory />
              <BestFoodCategory />
              <BestFoodCategory />
              <BestFoodCategory />
              <BestFoodCategory />
              <BestFoodCategory />

            </div>
        </div>
        </>
    )
}

export default BestFoodCarousal
