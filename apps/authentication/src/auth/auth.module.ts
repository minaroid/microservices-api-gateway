import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [JwtModule.register({
    global: true,
    secret: process.env.TOKEN_SECRET,
    signOptions: { expiresIn: process.env.TOKEN_EXPIRES_IN },
  }),],
  controllers: [AuthController],
  providers: [AuthService,],
})
export class AuthModule {}
