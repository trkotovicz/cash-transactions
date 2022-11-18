import { StatusCodes } from 'http-status-codes';

export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  UnauthorizedError = 'UnauthorizedError',
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
    message: 'Incorrect username or password',
    httpStatus: StatusCodes.UNAUTHORIZED,
  },
};
