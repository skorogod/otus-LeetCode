import { DataSource } from "typeorm";


export const dataSource = new DataSource(
    {
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "qwertyvbnm",
        "database": "LeetCode",
        "entities": [__dirname +'/../**/*.entity.{js,ts}'],
        "logging": true,
        "synchronize": true,
        "migrations": ["src/db/migrations/*.ts"],
        "migrationsTableName": "migrations",
    }
)

console.log(__dirname)
console.log(dataSource.entityMetadatas)