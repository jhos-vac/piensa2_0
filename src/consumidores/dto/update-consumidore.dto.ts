import { PartialType } from '@nestjs/swagger';
import { CreateConsumidoreDto } from './create-consumidore.dto';

export class UpdateConsumidoreDto extends PartialType(CreateConsumidoreDto) {}
