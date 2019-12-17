export interface IDatabaseOption {
  host: string;
  username: string;
  password: string;
  database: string;
}

export enum Eenv {
  Test = 'test',
  Development = 'development',
  Production = 'production',
}

export type EnvString = keyof typeof Eenv;

export type IDatabaseOptions = {
  [key in Eenv]: IDatabaseOption;
};

export const DB_CONFIG: IDatabaseOptions = {
  [Eenv.Test]: {
    username: 'root',
    password: 'root',
    database: 'database_test',
    host: '127.0.0.1',
  },
  [Eenv.Development]: {
    username: 'root',
    password: 'root',
    database: 'database_development',
    host: '127.0.0.1',
  },
  [Eenv.Production]: {
    username: 'root',
    password: 'root',
    database: 'database_production',
    host: '127.0.0.1',
  },
};

export const getOption = (): IDatabaseOption => {
  const env = process.env.NODE_ENV || Eenv.Test;

  // @ts-ignore
  return DB_CONFIG[env] || DB_CONFIG.test;
};
