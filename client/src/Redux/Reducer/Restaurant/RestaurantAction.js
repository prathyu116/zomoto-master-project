import axios from "axios";
import { GET_RESTAURANT } from "./RestaurantType";

export const getRestaurant = () => async (dispatch) => {
    try {

        const restaurantList = await axios({
            method: 'GET',
            url: "https://localhost:4001/restaurant"
        });
        return dispatch({ type: GET_RESTAURANT, payload: restaurantList.data });
    } catch (error) {
        return dispatch({ type: "error", payload: error });

    }
}