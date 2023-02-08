import { Module } from '@nestjs/common';
import { VendedoresService } from './vendedores.service';
import { VendedoresController } from './vendedores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [VendedoresController],
  providers: [VendedoresService],
  imports:[PrismaModule],
})
export class VendedoresModule {}
