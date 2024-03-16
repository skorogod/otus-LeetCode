import { DataSource } from "typeorm";


export const dataSource = new DataSource(
    {
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "qwertyvbnm",
        "database": "LeetCode",
        "entities": ["src/db/entity.ts"],
        "logging": true,
        "synchronize": true,
        "migrations": ["src/db/migrations/*.ts"],
        "migrationsTableName": "migrations",
    }
)