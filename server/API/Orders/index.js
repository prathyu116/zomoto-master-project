import express from "express";
import passport from "passport";

import {OrderModel} from "../../database/allModel";
//validation
import {validateOrderNew,validateOrderId } from "./../../Validation/order"

const Router = express.Router();

/*
Route            /
Description              Get all orders based on _id
Params           _id
Access           Public
Method           GET
*/

Router.get("/:_id",passport.authenticate("jwt", {session: false})  ,async(req,res)=> {
  try {
    await validateOrderId(req.params);
    const { _id } = req.params;
    const getOrders = await OrderModel.findOne({user: _id});

    if(!getOrders) {
      return res.status(404).json({error: "User not found"});
    }

  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Route            /new
Des             Add new order
Params           _id
Access           Public
Method           POST
*/

Router.post("/new/:_id", async(req,res)=> {
  try {
    await validateOrderNew(req.body);
    const { _id } = req.params;
    const { orderDetails } = req.body;
    const addNewOrder = await OrderModel.findOneAndUpdate(  //meanss pushing new order
      {
        user: _id
      },
      {
        $push: {orderDetails: orderDetails}
      },
      {
        new: true
      }
    );

    return res.json({order: addNewOrder});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

export default Router;