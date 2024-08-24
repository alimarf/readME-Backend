import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
// import { UpdateUserDto } from './dto/update-user.dto';

export const roundsOfHashing = 10;

// @Injectable()
// export class UsersService {
//   constructor(private prisma: PrismaService) {}

//   async create(createUserDto: CreateUserDto) {
//     const hashedPassword = await bcrypt.hash(
//       createUserDto.password,
//       roundsOfHashing,
//     );

//     createUserDto.password = hashedPassword;
//     return this.prisma.user.create({ data: createUserDto });
//   }

//   findAll() {
//     return this.prisma.user.findMany();
//   }

//   findOne(id: number) {
//     return this.prisma.user.findUnique({ where: { id } });
//   }

//   async update(id: number, updateUserDto: UpdateUserDto) {
//     if (updateUserDto.password) {
//       updateUserDto.password = await bcrypt.hash(
//         updateUserDto.password,
//         roundsOfHashing,
//       );
//     }
//     return this.prisma.user.update({ where: { id }, data: updateUserDto });
//   }

//   remove(id: number) {
//     return this.prisma.user.delete({ where: { id } });
//   }

//   async findOneByEmail(email: string): Promise<User | undefined> {
//     return this.prisma.user.findUnique({ where: { email } });
//   }
// }

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.prisma.user.findFirst({ where: { email } });
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );

    createUserDto.password = hashedPassword;
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }
}
