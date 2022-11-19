import Joi, { ValidationResult } from 'joi';
import passwordComplexity from 'joi-password-complexity';

const complexityOptions = {
  min: 8,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
};

const validateUser = (data: object): ValidationResult => {
  const schema = Joi.object({
    id: Joi.number().positive().integer(),
    username: Joi.string().min(3).required(),
    password: passwordComplexity(complexityOptions).required(),
  });

  const { error, value } = schema.validate(data);
  if (error) throw error;

  return value;  
};

const validateLogin = (data: object): ValidationResult => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: passwordComplexity(complexityOptions).required(),
  });

  const { error, value } = schema.validate(data);
  if (error) throw error;

  return value;
};

export { validateUser, validateLogin };
