import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { FormService } from './form.service';
import { HttpClient } from '@angular/common/http';
import { Form } from './form.model';
// import { jsPDF } from "jspdf";
// declare let html2canvas: any;
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  [x: string]: any;
  
  generatePDF() {
    var data = document.getElementById('pdfTable')!;

    html2canvas(data).then(canvas => {
      var imgWidth = 200;
      var imgHeight = 200;
      // var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      var pdf = new jsPDF('p', 'mm', [297, 210]);
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('newPDF.pdf');
    });
  }

  title = 'htmltopdf';
   
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  

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
    this.getAllForms();
    });
  }

download(){
  var getBase64Image = (document.getElementById("pdfTable"));
  console.log(getBase64Image);
  const doc = new jsPDF();
  // doc.addPage();
  // doc.setFont("Times New Roman");
  // doc.setFontSize(10);
  // doc.text(20, 30, "Budgeted Year:");
  // doc.setTextColor(0, 0, 0);
  // doc.text(20, 40, "Actual Occupancy:");
  // doc.save('FirstPdf.pdf');
  }


htmlToPdf() {
    let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

    // const doc = new jsPDF()
    var ta = document.getElementById('pdfTable') || '';
    // console.log(ta);
    // let final = ta.toString();
    // const myJSON = JSON.stringify(employee);
    // console.log(final);
    // doc.text(myJSON,10, 10);
    // doc.save('demo.pdf')

    var doc = new jsPDF('l', 'mm', [800, 700]);
    doc.html(ta, {
      callback: function (doc) {
        // doc.setFont("helvetica");
        // doc.setFontSize(45);
        doc.save();
      },
      x: 1,
      y: 1
    });
}


}