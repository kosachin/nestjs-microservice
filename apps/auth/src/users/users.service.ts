import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UsersRepositroy } from './users.repositroy';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UsersRepositroy) {}
  async createUser(createUserDto: CreateUserDto) {
    return this.userRepo.create(createUserDto);
  }
}
