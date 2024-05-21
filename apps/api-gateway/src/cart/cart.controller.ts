import { Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';

import axios, { AxiosError } from 'axios';
import { AuthGuard } from '@api-gateway/guards';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {

  constructor(private readonly cartService: CartService) {}

  @Get('*')
  @UseGuards(AuthGuard)
  async get(@Req() request: Request, @Res() response: Response) {
    const url = process.env.CART_URL + request.originalUrl;
    const user = (request as any).user;
    const params = {user}

    try {
      const {status, data} = await axios.get(url, {params});
      response.status(status).send({ status, data });
    } catch(error){
      if (axios.isAxiosError(error)) {
        const errorResponse = (error as AxiosError).response;
        if (errorResponse) {
          response.status(errorResponse.status).send({ status: errorResponse.status, data: errorResponse.data });
        } else {
          response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ status: HttpStatus.INTERNAL_SERVER_ERROR, data: {message: "Internal server error."} });
        }
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ status: HttpStatus.INTERNAL_SERVER_ERROR, data: {message: "Internal server error."} });
      }
    }
  }

  @Post('*')
  @UseGuards(AuthGuard)
  async post(@Req() request: Request, @Res() response: Response) {
    const url = process.env.CART_URL + request.originalUrl;
    const user = (request as any).user;
    const params = {user}

    try {
      const {status, data} = await axios.post(url, request.body, {params});
      response.status(status).send({ status, data });
    } catch(error){
      if (axios.isAxiosError(error)) {
        const errorResponse = (error as AxiosError).response;
        if (errorResponse) {
          response.status(errorResponse.status).send({ status: errorResponse.status, data: errorResponse.data });
        } else {
          response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ status: HttpStatus.INTERNAL_SERVER_ERROR, data: {message: "Internal server error."} });
          console.error('Error response not available');
        }
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ status: HttpStatus.INTERNAL_SERVER_ERROR, data: {message: "Internal server error."} });
      }
    }
  }

}
