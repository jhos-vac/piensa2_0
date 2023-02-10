import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConsumidoresService } from './consumidores.service';
import { CreateConsumidoreDto } from './dto/create-consumidore.dto';
import { UpdateConsumidoreDto } from './dto/update-consumidore.dto';

@Controller('clients')
@ApiTags('client')
export class ConsumidoresController {
  constructor(private readonly consumidoresService: ConsumidoresService) {}

  @Post()
  create(@Body() createConsumidoreDto: CreateConsumidoreDto) {
    return this.consumidoresService.create(createConsumidoreDto);
  }

  @Get()
  findAll() {
    return this.consumidoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consumidoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsumidoreDto: UpdateConsumidoreDto) {
    return this.consumidoresService.update(+id, updateConsumidoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consumidoresService.remove(+id);
  }
}
