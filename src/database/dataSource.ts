import { DataSource } from 'typeorm';
import { config } from 'src/config/typeorm';

export const dataSource = new DataSource(config);
