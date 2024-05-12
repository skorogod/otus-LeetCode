import {MinLength} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateRuleDto {
    @ApiProperty()
    @MinLength(5)
    title: string

    @ApiProperty()
    description: string
}
