import Joi from "joi";

export const StreamValidationSchema = {
  create: {
    body: Joi.object().keys({
      episodeId: Joi.string().required(),
      quality: Joi.string().required(),
      streamingPlatform: Joi.string().required(),
      title: Joi.string().required(),
    }),
  },
};
