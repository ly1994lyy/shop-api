import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(user) {
    const payload = { userName: user.userName, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
