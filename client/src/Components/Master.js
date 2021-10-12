import React from 'react'
import { useParams } from 'react-router';

const Master = () => {
    const { type} = useParams();
    return (
        <div>
            {type}
        </div>
    )
}

export default Master
