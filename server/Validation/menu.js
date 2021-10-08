import joi from "joi";

export const ValidateMenuId = (menuObj) => {

const Schema = joi.object({
    _id: joi.string().required()
});
return Schema.validateAsync(menuObj);
};

export const ValidateMenuImg = (menuObj) => {

const Schema = joi.object({
    _id: joi.array().items(joi.object({images: joi.string()}))
});
return Schema.validateAsync(menuObj);
};