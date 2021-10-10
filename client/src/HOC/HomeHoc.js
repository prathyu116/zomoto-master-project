import React from 'react';
import {Route} from "react-router-dom"
//Layout
import HomeLayout from '../Layout/HomeLayout';

const HomeLayoutHoc = ({component:Component, ...rest}) => {
    return (
        <>
         <Route
         {...rest}
         component={(props)=>(
             <HomeLayout>
                 <Component {...rest} />
             </HomeLayout>
         )}
         />
            
        </>
    )
}

export default HomeLayoutHoc;
