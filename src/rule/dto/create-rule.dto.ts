import {MinLength} from 'class-validator'

export class CreateRuleDto {
    @MinLength(5)
    title: string

    description: string
}
