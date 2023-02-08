import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    price: string;
    @ApiProperty()
    detail: string;
    @ApiProperty()
    category: string;
}
