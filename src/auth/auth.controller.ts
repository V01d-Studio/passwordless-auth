import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { AuthRequest } from './dto/auth-request.dto';
import { VerifyRequest } from './dto/verify-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  generateOTP(@Body() payload: AuthRequest): Promise<any> {
    return Promise.resolve(this.authService.generateOtp(payload.email));
  }

  @Post('/verify')
  verifyOTP(@Body() payload: VerifyRequest): Promise<string> {
    return Promise.resolve(
      this.authService.verifyOtp(payload.email, payload.otp),
    );
  }
}
