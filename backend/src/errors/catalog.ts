import { StatusCodes } from 'http-status-codes';

export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  UnauthorizedError = 'UnauthorizedError',
  ConflictError = 'ConflictError',
  GenericError = 'GenericError',
}

type ErrorResponseObject = { 
  message: string;
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Object not found',
    httpStatus: StatusCodes.NOT_FOUND,
  },
  UnauthorizedError: {
    message: 'Unauthorized access',
    httpStatus: StatusCodes.UNAUTHORIZED,
  },
  ConflictError: {
    message: 'User already exists',
    httpStatus: StatusCodes.CONFLICT,
  },
  GenericError: {
    message: 'Something wrong happend',
    httpStatus: StatusCodes.INTERNAL_SERVER_ERROR,
  },
};
