import { ApiProperty } from "@nestjs/swagger"
import { MinLength } from "class-validator"

export class CreateTaskTypeDto {
    @ApiProperty()
    @MinLength(5)
    title: string
}
