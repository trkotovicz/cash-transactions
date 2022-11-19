import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import TransactionService from '../services/Transactions';
// import ITokenPayload from '../interfaces/ITokenPayload';
import JwtService from '../services/jwtService';

export default class TransactionController {
  constructor(private transactionService: TransactionService) {}

  cashIn = async (req: Request/*  & ITokenPayload */, res: Response) => {
    // const { accountId } = req.tokenPayload;
    const token = String(req.headers.authorization);
    const data = JwtService.validateToken(token);
    const transactions = await this.transactionService.cashIn(data.accountId);
    res.status(StatusCodes.OK).json(transactions);
  };
}