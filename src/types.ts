export type ILevel = {
    id: number;
    title: string
}

export type ITask = {
    id: number,
    title: string,
    description: string,
    level: ILevel
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
    date: Date | string,
    text: string,
    task: ITask,
    user: IUser
}

export type ITaskType = {
    id: number,
    title: string
}