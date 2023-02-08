import { Module } from '@nestjs/common';
import { ConsumidoresService } from './consumidores.service';
import { ConsumidoresController } from './consumidores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ConsumidoresController],
  providers: [ConsumidoresService],
  imports: [PrismaModule],
})
export class ConsumidoresModule {}
