import { DataSource } from 'typeorm';
import {config as dbconfig} from 'dotenv'
import { dataSourceConfig } from '../config/typeorm';

export const dataSource = new DataSource(dataSourceConfig);
