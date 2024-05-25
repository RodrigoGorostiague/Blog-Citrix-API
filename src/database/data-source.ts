import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

/**
 * Este archivo es utilizado para configurar las migraciones dentro de la base de datos.
 * Se utiliza la librería dotenv para cargar las variables de entorno.
 * Se crea una instancia de DataSource con la configuración de TypeORM.
 * Los comandos para realizar las migraciones son:
 * - npm run migration:run
 * - ─ npm run migration:generate ./src/database/migrations/<nombre de la migracion>
 * - npm run migration:revert
 * - npm run migration:drop
 */

dotenv.config();

const AppDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  logging: false,
  synchronize: false,
  entities: ['src/**/*.entity.{ts,js}'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
export default AppDataSource;
