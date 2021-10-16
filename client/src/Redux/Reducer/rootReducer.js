import { combineReducers } from "redux";

import restaurant from "./Restaurant/RestaurantReduce";

const rootReducer = combineReducers({restaurant});

export default rootReducer;