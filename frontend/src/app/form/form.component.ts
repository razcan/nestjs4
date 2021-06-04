import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  angajat = {
    selectedState: '',
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

  constructor() { }

  onBasicUploadAuto(zip:any) {
    console.log(zip);
  }
  

  ngOnInit(): void {
  }

}
