import joi from "joi";

export const validateImg = (imgObj) => {

const Schema = joi.object({
    images: joi.array().items(joi.object({location: joi.string})),
});
return Schema.validateAsync(imgObj);
};

