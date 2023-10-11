import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

  // Memoria
  // users: Array<User>

  // definomos el constructor 
  constructor(@InjectModel(User.name) private userMondel: Model<UserDocument>){ }

  async create(createUserDto: CreateUserDto) {
    return await this.userMondel.create(createUserDto);
  }

  findAll() {
    return 'this.users';
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
