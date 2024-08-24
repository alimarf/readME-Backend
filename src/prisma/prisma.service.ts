import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'], // Enable detailed logging
    });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('Prisma service initialized and connected.');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('Prisma service disconnected.');
  }
}
