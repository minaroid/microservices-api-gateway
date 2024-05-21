import { IsNumber, IsPositive, } from 'class-validator';
export class CartRequestDto {
  @IsNumber()
  @IsPositive()
  readonly productId: number;

  @IsNumber()
  @IsPositive()
  readonly quantity: number;
}
