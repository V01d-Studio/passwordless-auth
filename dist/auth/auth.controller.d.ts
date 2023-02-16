import { AuthService } from './auth.service';
import { AuthRequest } from './dto/auth-request.dto';
import { VerifyRequest } from './dto/verify-request.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    generateOTP(payload: AuthRequest): Promise<any>;
    verifyOTP(payload: VerifyRequest): Promise<string>;
}
