import { ApiProperty } from "@nestjs/swagger";

export class CreateVendedoreDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    mail: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    cell: string;
    
}
