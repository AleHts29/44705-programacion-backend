import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  // Memoria
  users: Array<User>

  // definomos el constructor 
  constructor(){
    this.users = []
  }

  create(createUserDto: CreateUserDto) {
    createUserDto.id = this.users.length+1;
    let newuser = this.users.push(createUserDto)
    return createUserDto.id;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
