import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';
import { HttpClient } from '@angular/common/http';
import { Form } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  angajat = {
    // selectedState: '',
    Firstname:  '',
    Lastname: '',
    Address:  '',
    Zip: '',
    City: '',
};

states: any[] = [
  {name: 'Arizona'},
  {name: 'California'},
  {name: 'Florida'},
  {name: 'Ohio'},
  {name: 'Washington'}
];

allForms: Array<Form> = [];

  constructor(private formService: FormService, private httpClient:HttpClient) { }


  ngOnInit(): void {
    this.getAllForms();
  }

  private getAllForms() {
    this.formService.getAllForms().subscribe(allForms => {
      this.allForms = allForms;
    });
  }

  onBasicUploadAuto(angajat:any) {
    console.log(this.angajat);
    this.formService.create_new_form(this.angajat).subscribe((allForms: Form[]) => {
    });
  }

}