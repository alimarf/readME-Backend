import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
export declare const roundsOfHashing = 10;
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        name: string | null;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string | null;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string | null;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        name: string | null;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string | null;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findOneByEmail(email: string): Promise<User | undefined>;
}
