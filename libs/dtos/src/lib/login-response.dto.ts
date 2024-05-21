import { Expose } from 'class-transformer';

export class LoginResponseDto {
  @Expose()
  readonly token: string;
}
