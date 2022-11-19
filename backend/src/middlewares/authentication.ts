import { Request, Response, NextFunction } from 'express';
import JwtService from '../services/jwtService';
// import ITokenPayload from '../interfaces/ITokenPayload';

const authToken = (
  req: Request/*  & ITokenPayload */,
  _res: Response,
  next: NextFunction,
) => {
  const { authorization: token } = req.headers;
  const { data } = JwtService.validateToken(String(token));
  // req.tokenPayload = data;
  console.log(data);
  next();
};

export default authToken;