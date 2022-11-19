import { Request, Response, NextFunction } from 'express';
import JwtService from '../services/jwtService';

const authToken = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  const { data } = JwtService.validateToken(String(token));
  req.tokenPayload = data;
  next();
};

export default authToken;