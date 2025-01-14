// src/user/user.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Users } from '../models/users.model';
import { isMatchPasswordByHash } from 'src/lib/salt-hash-generate';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async findByEmail(
    @Body() body: { email: string; password: string },
  ): Promise<Users | null> {
    const user = await this.userService.findByEmail(body.email);
    const isMatch = await isMatchPasswordByHash(body.password, user.password);
    return user;
  }
}
