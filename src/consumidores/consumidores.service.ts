import { Injectable } from '@nestjs/common';
import { type } from 'os';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateConsumidoreDto } from './dto/create-consumidore.dto';
import { UpdateConsumidoreDto } from './dto/update-consumidore.dto';

@Injectable()
export class ConsumidoresService {
  constructor(private prisama: PrismaService){}
  create(createConsumidoreDto: CreateConsumidoreDto) {
    return this.prisama.client. create({data:createConsumidoreDto});
  }

  findAll() {
    return this.prisama.client. findMany();
  }

  findOne(id: number) {
    return this.prisama.client.findUnique({where:{id}});
  }

  update(id: number, updateConsumidoreDto: UpdateConsumidoreDto) {
    return this.prisama.client.update({
      where:{id},
      data: updateConsumidoreDto,
    });
  }

  remove(id: number) {
    return this.prisama.client.delete({where:{id}});
  }
}
