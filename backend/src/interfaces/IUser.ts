import { z } from 'zod';

const userZodSchema = z.object({
  id: z.number().int().positive(),
  username: z.string().min(3),
  password: z.string().min(8),
  accountId: z.number().int().positive(),
});

type IUser = z.infer<typeof userZodSchema>;

export { IUser, userZodSchema };

// export default interface IUser {
//   id?: number;
//   username: string;
//   password: string;
//   accountId: number;
// }