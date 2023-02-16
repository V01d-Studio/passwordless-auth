import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { v4 as uuidv4 } from 'uuid';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private cachemanager: Cache,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  getNumericOtp(length: number): string {
    // Declare a digits variable
    // which stores all digits
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

  async generateOtp(email: string): Promise<any> {
    const otp = this.getNumericOtp(6);
    const user = await this.userRepo.findOne({ where: { email: email } });
    if (user) {
      throw new HttpException(
        `User with this Email already exists`,
        HttpStatus.OK,
      );
    }

    const key: string = email;
    await this.cachemanager.set(key, otp, 90);
    return Promise.resolve({ key, otp });
  }

  async verifyOtp(email: string, otp: string): Promise<string> {
    const value = await this.cachemanager.get<string>(email);
    if (value == otp) {
      this.cachemanager.del(email);
      const user = new User();
      user.email = email;
      user.userRole = 'USER';
      await this.userRepo.save(user);
      return Promise.resolve('OTP Verified!');
    } else {
      return Promise.resolve('OTP Unverified');
    }
  }
}
