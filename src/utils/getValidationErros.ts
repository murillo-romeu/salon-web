import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

interface MyValidationError extends ValidationError{
  path:string;
  inner: MyValidationError[];
}

export default function getValidationErros(err: MyValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
