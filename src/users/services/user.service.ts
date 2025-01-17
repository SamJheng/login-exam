// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from '../models/users.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users)
    private userModel: typeof Users,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(name: string, email: string, password: string) {
    return this.userModel.create({ name, email, password });
  }

  async findAll() {
    return this.userModel.findAll();
  }
  async findByEmail(email: string): Promise<Users | null> {
    return this.userModel.findOne({
      where: { email },
    });
  }
  async generateToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
