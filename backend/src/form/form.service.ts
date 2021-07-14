import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { getConnection } from "typeorm";
import { LessThan, Repository } from 'typeorm';
import { Form } from './entities/form.entity';

@Injectable()
export class FormService {

  constructor(
    @InjectRepository(Form)
    private FormRepository: Repository<Form>,
  ) {}

  create_new_form(createFormDto: CreateFormDto): Promise<Form> {
    const form = new Form();

    form.selectedState = '';
    form.Firstname = createFormDto.Firstname;
    form.Lastname = createFormDto.Lastname;
    form.Address = createFormDto.Address;
    form.Zip = createFormDto.Zip;
    form.City = createFormDto.City;
    return this.FormRepository.save(form);

  }

  findAll(): Promise<Form[]> {
    return this.FormRepository.find();
  }

  findOne(id: number) {
    return this.FormRepository.findOne(id);
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return this.FormRepository.delete(id);
  }
}
