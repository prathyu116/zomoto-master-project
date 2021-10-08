import joi from "joi";

export const validateOrderId = (orderObj) => {

const Schema = joi.object({
  _id: joi.string().required()
});
return Schema.validateAsync(orderObj);
};

export const validateOrderNew = (orderObj) => {

const Schema = joi.object({
    food: joi.string().required(),
    quantity: joi.number(),
    paymode:joi.string().required(),
    status:joi.string(),

});
return Schema.validateAsync(orderObj);
};