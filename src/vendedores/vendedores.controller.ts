import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendedoresService } from './vendedores.service';
import { CreateVendedoreDto } from './dto/create-vendedore.dto';
import { UpdateVendedoreDto } from './dto/update-vendedore.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('vendedores')
@ApiTags('seller')
export class VendedoresController {
  constructor(private readonly vendedoresService: VendedoresService) {}

  @Post()
  create(@Body() createVendedoreDto: CreateVendedoreDto) {
    return this.vendedoresService.create(createVendedoreDto);
  }

  @Get()
  findAll() {
    return this.vendedoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendedoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendedoreDto: UpdateVendedoreDto) {
    return this.vendedoresService.update(+id, updateVendedoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendedoresService.remove(+id);
  }
}
