import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from '../products/products.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { CartModule } from '../cart/cart.module';

@Module({
  imports: [ProductsModule, AuthenticationModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
