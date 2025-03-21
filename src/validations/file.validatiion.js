import Joi from "joi";

export const FileValidationSchema = {
  create: {
    body: Joi.object().keys({
      filename: Joi.string().required(),
      path: Joi.string().required(),
      size: Joi.number().required(),
      uploadedAt: Joi.date().required(),
    }),
  },
};
