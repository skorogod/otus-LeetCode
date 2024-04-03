"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'qwertyvbnm',
    database: 'LeetCode',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    logging: true,
    synchronize: true,
    migrations: ['src/db/migrations/*.ts'],
    migrationsTableName: 'migrations',
});
//# sourceMappingURL=dataSource.js.map