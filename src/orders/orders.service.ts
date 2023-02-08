import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor (private prisma:PrismaService){}
  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({data: createOrderDto});
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({where:{id}});
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where:{id},
      data: updateOrderDto
    });
  }

  remove(id: number) {
    return this.prisma.order.delete({where:{id}});
  }
}
