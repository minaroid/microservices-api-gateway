import { Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto, LoginResponseDto, ProfileResponseDto } from '@api-gateway/dtos';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(request: LoginRequestDto): Promise<LoginResponseDto> {
    const token = await this.jwtService.signAsync({
      userName: request.userName,
    });

    const result = { token };
    return plainToClass(LoginResponseDto, result, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }

  async profileByUserName(userName: string): Promise<ProfileResponseDto | null> {
    try {
  
      return plainToClass(ProfileResponseDto, {userName}, {
        excludeExtraneousValues: true,
        exposeUnsetFields: false,
      });
    } catch {
      return null;
    }
  }
  async profileByToken(token: string): Promise<ProfileResponseDto | null> {
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.TOKEN_SECRET,
      });
      return plainToClass(ProfileResponseDto, payload, {
        excludeExtraneousValues: true,
        exposeUnsetFields: false,
      });
    } catch {
      return null;
    }
  }

}
