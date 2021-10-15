import React from 'react'
import { useParams } from 'react-router';
import BestFood from './BestFood/BestFood';
import Delivary from './Delivary/Delivary';
import Collection from './Collection/Collection';

const Master = () => {
    const { type } = useParams();
    return (
        <>
            <div className="m-4">
                {
                    type === "delivary" && <Delivary />
                }
            </div>
            <div className="m-4">
                {
                    type === "delivary" && <BestFood />
                }
            </div>
            <div className="m-4">
                {
                    type === "dining" && <Collection />
                }
            </div>
        </>
    )
}

export default Master
