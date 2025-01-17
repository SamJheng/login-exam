// src/user/user.controller.ts
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { isMatchPasswordByHash } from 'src/lib/salt-hash-generate';
import { ErrorResponseResult, ResponseResult } from 'src/lib/respone';
import { LoginDto, loginSchema } from '../models/login.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  @ApiOperation({ summary: 'this is a login api' }) // 操作描述
  @ApiResponse({
    status: 200,
    description: 'if login success get access token',
  }) // 回應描述
  async findByEmail(@Body() body: LoginDto): Promise<ResponseResult> {
    try {
      const { error } = loginSchema.validate(body);
      if (error) {
        throw new BadRequestException(
          error.details.map((e) => e.message).join(', '),
        );
      }
      const user = await this.userService.findByEmail(body.email);
      const isMatch = await isMatchPasswordByHash(body.password, user.password);
      if (!isMatch) {
        throw new Error('password is not match');
      }
      const access_token = await this.userService.generateToken({
        email: user.email,
      });
      const res = new ResponseResult({
        message: 'Get access token',
        result: access_token,
      });
      return res;
    } catch (error) {
      const errRes = new ErrorResponseResult({
        success: false,
        message: 'Login is fail',
        error: error.message || 'An error occurred',
      });
      return errRes;
    }
  }
}
