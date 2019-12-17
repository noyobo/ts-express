import { Sequelize } from 'sequelize';

import { getOption } from '@/config/db';

const dbOption = getOption();

export const sequelize = new Sequelize(dbOption.database, dbOption.username, dbOption.password, {
  host: dbOption.host,
  dialect: 'mysql',
  define: {
    underscored: true,
    timestamps: true,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
  timezone: '+8:00',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection succeeded');
  })
  .catch((error) => {
    console.error(error.message);
    console.error('Database connection failed!');
    process.exit();
  });

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('Tables created successfully');
  })
  .catch((error) => {
    console.log(error);
    console.error('Tables creation failed');
  });
