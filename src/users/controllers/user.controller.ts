// src/user/user.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':email')
  async findByEmail(@Param('email') email: string): Promise<User | null> {
    return this.userService.findByEmail(email);
  }
}
