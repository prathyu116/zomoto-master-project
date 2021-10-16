import {GET_RESTAURANT} from "./RestaurantType";

const INITIAL_STATE = {
    restaurant : []
};

const restaurantReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type) {
        case GET_RESTAURANT:
        return {
            ...state,
            restaurant: action.payload
        };
        default:
            return{
                ...state
            };
    }
};
export default restaurantReducer;