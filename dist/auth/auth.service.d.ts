import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class AuthService {
    private cachemanager;
    private userRepo;
    constructor(cachemanager: Cache, userRepo: Repository<User>);
    getNumericOtp(length: number): string;
    generateOtp(email: string): Promise<any>;
    verifyOtp(email: string, otp: string): Promise<string>;
}
