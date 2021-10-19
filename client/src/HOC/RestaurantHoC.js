import React from 'react';
import {Route} from "react-router-dom"
//Layout
import RestaurantLayout from '../Layout/RestaurantLayout';
const RestaurantLayoutHoc = ({component:Component, ...rest}) => {
    return (
        <>
         <Route
         {...rest}
         component={()=>(
             <RestaurantLayout>
                 <Component {...rest} />
             </RestaurantLayout>
         )}
         />
            
        </>
    )
}

export default RestaurantLayoutHoc;
