import { IsEmail } from 'class-validator';

export class AuthRequest {
  @IsEmail()
  email: string;
}
