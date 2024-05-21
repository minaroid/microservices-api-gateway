import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Req} from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginRequestDto, LoginResponseDto, ProfileResponseDto } from '@api-gateway/dtos';

@Controller('')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/login')
  login(@Body() body: LoginRequestDto): Promise<LoginResponseDto> {
    return this.service.login(body);
  }

  @Post('/verify')
  @HttpCode(HttpStatus.OK)
  verify(@Body() body: {token: string}): Promise<ProfileResponseDto> {
    return this.service.profileByToken(body.token);
  }

  @Get('/profile')
  @HttpCode(HttpStatus.OK)
  profile(@Query('user') user: any): Promise<ProfileResponseDto> {
    return this.service.profileByUserName(user.userName);
  }

}
