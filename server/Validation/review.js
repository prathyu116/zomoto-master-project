import joi from "joi";

export const ValidateReviewNew = (reviewObj) => {

const Schema = joi.object({
    reviewData: joi.string().required()
});
return Schema.validateAsync(reviewObj);
};

export const ValidateReviewDelete = (reviewObj) => {

const Schema = joi.object({
  _id: joi.string().required()
});
return Schema.validateAsync(reviewObj);
};