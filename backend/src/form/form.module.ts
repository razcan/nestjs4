import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { Form } from './entities/form.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './upload',
      }),
    }),  
    TypeOrmModule.forFeature([Form])
  ],
  controllers: [FormController],
  providers: [FormService]
})
export class FormModule {}


// curl --location --request POST 'http://127.0.0.1:3000/form/file4' \
// --form 'files=@"/C:/Users/razvan.mustata/Desktop/pz1.jpg"' \
// --form 'files=@"/C:/Users/razvan.mustata/Desktop/pz2.jpg"' \
// --form 'files=@"/C:/Users/razvan.mustata/Desktop/pz3.jpg"'