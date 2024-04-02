import { dataSource } from '../../database/dataSource';


import {
  DeepPartial,
  EntityTarget,
  FindManyOptions,
  FindOptionsWhere,
  ObjectLiteral,
} from 'typeorm';

export const getList = async <T extends ObjectLiteral>(
  entity: EntityTarget<T>,
  findOptions: FindManyOptions<T> | undefined,
) => {
  return await dataSource.getRepository(entity).find(findOptions);
};

export const getDetail = async <T extends ObjectLiteral>(
  entity: EntityTarget<T>,
  findOptions: FindOptionsWhere<T>,
) => {
  return await dataSource.getRepository(entity).findOneBy(findOptions);
};

export const create = async <T extends ObjectLiteral>(
  entity: EntityTarget<T>,
  props: DeepPartial<T>,
) => {
  return await dataSource.getRepository(entity).create(props);
};

export const save = async <T extends ObjectLiteral>(
  entity: EntityTarget<T>,
  resource: T,
) => {
  return await dataSource.getRepository(entity).save(resource);
};

export const merge = async <T extends ObjectLiteral>(
  entity: EntityTarget<T>,
  record: T,
  newData: DeepPartial<T>,
) => {
  return dataSource.getRepository(entity).merge(record, newData);
};

export const deleteResource = async <T extends ObjectLiteral>(
  entity: EntityTarget<T>,
  id: number | string,
) => {
  return await dataSource.getRepository(Comment).delete(id);
};
