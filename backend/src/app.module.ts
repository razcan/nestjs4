import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';

import { HttpModule } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [FormModule,
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './upload',
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'razvan',
      password: 'Vasilica#25',
      database: 'api_local',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
