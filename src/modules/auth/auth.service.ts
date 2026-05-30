import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  register(dto: RegisterDto) {
    return { message: 'Not implemented yet' };
  }

  login(dto: LoginDto) {
    return { message: 'Not implemented yet' };
  }
}
