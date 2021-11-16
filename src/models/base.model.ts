import * as Joi from 'joi';

export type BaseModel = {
  creactedAt?: Date;
  modifiedAt?: Date;
};

export const baseValidation = Joi.object().keys({
  creactedAt: Joi.date().optional(),
  modifiedAt: Joi.date().optional(),
});
