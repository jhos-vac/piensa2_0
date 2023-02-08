import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    mail: string;
}
