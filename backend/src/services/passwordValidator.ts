import Joi, { ValidationResult } from 'joi';
import passwordComplexity from 'joi-password-complexity';

const passwordValidator = (data: string): ValidationResult => {
  const complexityOptions = {
    min: 8,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
  };

  const schema = Joi.object({
    password: passwordComplexity(complexityOptions).required(),
  });

  const { error, value } = schema.validate(data);

  if (error) throw error;

  return value;
};

export default passwordValidator;
