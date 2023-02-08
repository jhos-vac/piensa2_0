import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVendedoreDto } from './dto/create-vendedore.dto';
import { UpdateVendedoreDto } from './dto/update-vendedore.dto';

@Injectable()
export class VendedoresService {
  constructor(private prisma:PrismaService){}
  create(createVendedoreDto: CreateVendedoreDto) {
    return this.prisma.seller.create({data:createVendedoreDto});
  }

  findAll() {
    return this.prisma.seller.findMany();
  }

  findOne(id: number) {
    return this.prisma.seller.findUnique({where:{id}});
  }

  update(id: number, updateVendedoreDto: UpdateVendedoreDto) {
    return this.prisma.seller.update({
      where:{id},
      data:updateVendedoreDto
    });
  }

  remove(id: number) {
    return this.prisma.seller.delete({where:{id}});
  }
}
