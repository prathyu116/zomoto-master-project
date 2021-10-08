import joi from "joi";

export const ValidateUser = (userObj) => {

const Schema = joi.object({
    _id: joi.string().required()
});
return Schema.validateAsync(userObj);
};

// export const ValidateReviewDelete = (userObj) => {

// const Schema = joi.object({
//   _id: joi.string().required()
// });
// return Schema.validateAsync(userObj);
// };