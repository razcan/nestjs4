import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import {  UploadedFile,UseInterceptors, UploadedFiles} from '@nestjs/common';
import { SampleDto } from './dto/sample.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  create_new_form(@Body() createFormDto: CreateFormDto) {
    return this.formService.create_new_form(createFormDto);
  }

  @Get()
  findAll() {
    return this.formService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    return this.formService.update(+id, updateFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formService.remove(+id);
  }


//   @UseInterceptors(FileInterceptor('file'))
//   @Post('file')
//   uploadFile(
//     @Body() body: SampleDto,
//     @UploadedFile() file: Express.Multer.File,
//   ) {
//     return {
//       body,
//       file: file.buffer.toString(),
//     };
//   }

// @Post('file2')
// @UseInterceptors(
// 	FileInterceptor('file'),
// )
// async uploadedFile(@UploadedFile() file) {
//     const response = {
//     	originalname: file.originalname,
//     	filename: file.filename,
//     };
//     return response;
// }

// @Post('file3')
// @UseInterceptors(
// 	FileInterceptor('file'),
// )
// async uploadedFile2(@UploadedFile() file) {
//     const response = {
//     	originalname: file.originalname,
//     	filename: file.filename,
//     };
//     return response;
// }

@Post('file4')
@UseInterceptors(FilesInterceptor('files', 20))
uploadFile3(@UploadedFiles() files) {
 return files.map(
     (files: { 
         originalname: any; 
         size: any;
         filename : any;
         path: any;
         mimetype: any;
   }) => [files.originalname
      , files.size, files.filename,files.mimetype, files.path 
   ]);
}


}
