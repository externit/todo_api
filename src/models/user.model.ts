import * as Joi from 'joi'

import { BaseModel, baseValidation } from './base.model'

export type User = BaseModel & {
  email: string
  passwordHash: string
}

export const userValidation = baseValidation.keys({
  email: Joi.string()
    .required()
    .pattern(new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)),
  passwordHash: Joi.string()
    .required()
    .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{4,}$/))
})