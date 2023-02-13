import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty()
    owner: string;
    @ApiProperty()
    product: string;
    @ApiProperty()
    quantity_product: string;
    @ApiProperty()
    total: string;
    @ApiProperty()
    time_order?: Date
    @ApiProperty()
    time_exit?: Date 
}
