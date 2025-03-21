import Joi from "joi";

export const GenreSeriesValidationSchema = {
  create: {
    body: Joi.object().keys({
      genreId: Joi.string().required(),
      seriesId: Joi.string().required(),
      title: Joi.string().required(),
    }),
  },
};
