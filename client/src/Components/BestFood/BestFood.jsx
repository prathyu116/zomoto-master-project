import React from 'react'
import { Link } from 'react-router-dom'
import BestFoodCarousal from './BestFoodCarousal'

const BestFood = () => {
    return (
        <div>
            <Link to="/restaurant/123">
            <BestFoodCarousal />
           </Link>
        </div>
    )
}

export default BestFood
