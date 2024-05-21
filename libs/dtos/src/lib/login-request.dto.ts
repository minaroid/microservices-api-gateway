import { IsNotEmpty, IsString } from 'class-validator';
export class LoginRequestDto {
  @IsString()
  @IsNotEmpty()
  readonly userName: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
