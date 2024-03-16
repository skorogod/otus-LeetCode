export enum ILevels  {
    light = 0,
    medium = 1,
    hard = 2,
}

export type ITask = {
    id: number,
    title: string,
    description: string,
    level: ILevels
    tags: string[]
    links: string[]
}

export type IRole = {
    id: number,
    title: string,
    description: string,
    rules: IRule[]
}

export type IRule = {
    id: number,
    title: string,
    description: string
}

export type IUser = {
    id: number,
    email: string,
    password: string,
    username: string,
    role: IRole
}

export type IComment = {
    id: number,
    date: Date,
    text: string,
    task: ITask,
    user: IUser
}