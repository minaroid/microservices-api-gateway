import { Expose } from 'class-transformer';

export class ProfileResponseDto {
  @Expose()
  readonly userName: string;

}
