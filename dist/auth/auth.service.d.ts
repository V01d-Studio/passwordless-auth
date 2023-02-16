import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { MailerService } from '@nestjs-modules/mailer/dist';
export declare class AuthService {
    private cachemanager;
    private userRepo;
    private mailService;
    constructor(cachemanager: Cache, userRepo: Repository<User>, mailService: MailerService);
    getNumericOtp(length: number): string;
    sendEmail(email: string): Promise<SentMessageInfo>;
    generateOtp(email: string): Promise<any>;
    verifyOtp(email: string, otp: string): Promise<string>;
}
