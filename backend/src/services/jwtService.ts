import * as jwt from 'jsonwebtoken';
import IUserJwt from '../interfaces/IUserJwt';

class JwtService {
  static createToken(data: IUserJwt): string {
    const token = jwt.sign({ data }, 'jwt_secret');
    return token;
  }

  static validateToken = (token: string) => {
    try {
      const { data } = jwt.verify(token, 'jwt_secret') as jwt.JwtPayload;
      return data;
    } catch (error) {
      const err = new Error('Token must be a valid token');
      err.name = 'UnauthorizedError';
      throw err;
    }
  };
}

export default JwtService;
