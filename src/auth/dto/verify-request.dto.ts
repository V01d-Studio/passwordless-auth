import { IsEmail } from 'class-validator';

export class VerifyRequest {
  @IsEmail()
  email: string;
  otp: string;
}
