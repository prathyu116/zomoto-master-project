import express from 'express';
import { RestaurantModel } from "../../database/allModel";

//validatoion
import {ValidateRestaurantCity,ValidateRestaurantSearchString} from "../../Validation/restaurant";
import {ValidateRestaurantId } from "./../../Validation/Food";

const Router = express.Router();


/*
Route            /
Des              get all Restaurants details
Params           None
Access           Public
Method           GET
*/

Router.get("/", async (req, res) => {
  try {
    await ValidateRestaurantCity(req.params);

    const { city } = req.query;
    const restaurants = await RestaurantModel.find({ city });
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


/*
Route            /
Des              Get particular Restaurant details based on id
Params           _id
Access           Public
Method           GET
*/

Router.get("/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);
    const { _id } = req.params;
    const restaurant = await RestaurantModel.findOne(_id);

    if (!restaurant)
      return res.status(404).json({ error: "Restaurant not found" });

    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
/*
Route            /search
Des              Get Restaurant details by searching
Params           none
Body             searchString 
Access           Public
Method           GET
*/
Router.get("/search", async (req, res) => {
  try {
    await ValidateRestaurantSearchString(req.params);
    const { searchString } = req.body;
    const restaurants = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
