import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { ConfigService } from 'src/config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports:[
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(config: ConfigService)=>({

        type:'postgres',
        host:config.get('HOST'),
        port: +config.get('PORT'),
        username: config.get('USER'),
        password: config.get('PASSWORD'),
        database: config.get('DATABASE'),
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
      })
    })
  ],
  providers:[...databaseProvider],
  exports:[...databaseProvider]
})
export class DatabaseModule {

}