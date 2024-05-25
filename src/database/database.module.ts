import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config';
//import { Posting } from '../posting/entities/posts.entity';
//import { Categories } from '../posting/entities/categories.entity';
//import { Tags } from '../posting/entities/tags.entity';
//import { Replys } from '../posting/entities/replys.entity';
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

@Global()
@Module({
  imports: [
    /**Para realizar la instalacion de TypeORM necesitamos ejecutar npm i @nestjs/typeorm typeorm para instalar todas las dependencias
     * necesarias para trabajar con TypeORM en NestJS.
     * A continuacion configuramos los parametros para la coneccion a la base de datos de tipo Postgres
     * mediante el metodo forRootAsync, el cual recibe un objeto con las propiedades inject y useFactory.
     */
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, password, dbname, port } = configService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: dbname,
          /** autoLoadEntities: true, nos permite
           * cargar las entidades de forma automatica, sin necesidad de importarlas en el modulo principal.
           * Esto es util cuando se tiene un proyecto con muchas entidades y se desea cargarlas de forma automatica.
           */
          autoLoadEntities: true,
          /**
           * La propiedad synchronize: true, permite que TypeORM sincronice las entidades
           * con la base de datos en cada inicio de la aplicacion, lo cual puede ser peligroso!!!!
           */
          synchronize: false,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
