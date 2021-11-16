import * as Joi from 'joi';
import { baseValidation, BaseModel } from './base.model';

export type Todo = BaseModel & {
  title: string;
  status: string;
  email?: string;
};

export const todoValidation = baseValidation.keys({
  title: Joi.string(),
  email: Joi.string(),
  status: Joi.string().valid('active', 'done'),
});
