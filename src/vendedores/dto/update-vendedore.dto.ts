import { PartialType } from '@nestjs/swagger';
import { CreateVendedoreDto } from './create-vendedore.dto';

export class UpdateVendedoreDto extends PartialType(CreateVendedoreDto) {}
