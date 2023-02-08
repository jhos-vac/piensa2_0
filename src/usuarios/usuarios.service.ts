import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma:PrismaService){}

  create(createUsuarioDto: CreateUsuarioDto) {
   return this.prisma.user.create({data:createUsuarioDto});
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({where:{id}});
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.user.update({
      where:{id},
      data:updateUsuarioDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({where:{id}});
  }
}
