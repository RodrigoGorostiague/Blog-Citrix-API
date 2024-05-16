import { Global, Module } from '@nestjs/common';
import { Client } from 'pg';
/**
 * Database module (Global)
 * Permitte que el scope de este modulo sea de alcance global, es decir,
 * que cualquier modulo que importe este modulo podra acceder a los servicios, controladores y
 *  otros elementos que se exporten en este modulo y no requiera ser importado en otros modulos.
 */

/******************************************************************/

/**
 * Para crear una coneccion a una base de datos de tipo Postgres debemos instalar las
 * deendencias mediante npm i ps y a su vez los tipados mediante npm i @types/pg.
 * Una vez hehco esto procedemos a crear un modulo de base de datos de tipo Client
 */

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'blogdb',
  password: 'postgres',
  port: 5432,
});

client.connect();

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: 'PG_CLIENT',
      useValue: client,
    },
  ],
  exports: ['PG_CLIENT'],
})
export class DatabaseModule {}
