import { MinLength } from "class-validator"

export class CreateTaskTypeDto {
    @MinLength(5)
    title: string
}
