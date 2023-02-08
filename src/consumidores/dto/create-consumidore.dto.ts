import { ApiProperty } from "@nestjs/swagger";

export class CreateConsumidoreDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    mail: string;
}
