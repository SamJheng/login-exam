// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from '../models/users.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users)
    private userModel: typeof Users,
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
}
