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
import { encode, decode } from 'js-base64';
import {Base64} from 'js-base64';
import Axios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios';
import { Validators } from '@angular/forms';
import {HttpParams} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  constructor(private formService: FormService, private httpClient:HttpClient, private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllForms();
  }


  [x: string]: any;

 public uploadedFiles: any[] = [];
 multipleImages = [];
 

 public REST_API_SERVER: string = "http://127.0.0.1:3000/form/file4";

 selectMultipleImage(event: any){
  if (event.target.files.length > 0) {
    this.multipleImages = event.target.files;
  }
}


onMultipleSubmit(){
  const formData = new FormData();
  for(let img of this.multipleImages){
    formData.append('files', img);
  }

  this.http.post<any>('http://127.0.0.1:3000/form/file4', formData).subscribe(
    (res) => console.log(res),
    (err) => console.log(err)
  );
}


 onFileSelect(event: Event) {
  const element = event.currentTarget as HTMLInputElement;
  let fileList: FileList | null = element.files;
  if (fileList) {
      const file = fileList[0];
      this.uploadForm.get('profile').setValue(file);
  }
}

// onSubmit() {
//   const formData = new FormData();
//   formData.append('files', this.uploadForm.get('profile').value);

//   this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
//     (res) => console.log(res),
//     (err) => console.log(err)
//   );
// }


 public sendGetRequest(){
  this.formService.getAllForms()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.repos = response; 
          console.log(this.repos);
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }


 onFileChange(event: Event){
  const element = event.currentTarget as HTMLInputElement;
  let fileList: FileList | null = element.files;
  if (fileList) {
    console.log("FileUpload -> files", fileList);

    const params = new HttpParams()
    .set('orderBy', '"$key"')
    .set('limitToFirst', "1");

    this.courses = this.http
    .get("http://127.0.0.1:3000/form", {params})
  }
 }

  afuConfig = {
    multiple: true,
    theme: "dragNDrop",
    formatsAllowed: ".jpg,.png",
    uploadAPI: {
      // url:"https://slack.com/api/files.upload"
      url:"http://127.0.0.1:3000/form/file4",
      // method:"POST",
      headers: {
        "Content-Type" : "text/plain;charset=UTF-8"
         },
    }
};



  // onUpload(event: { files: any; }) {
  //   console.log('sdsdsds');
  //   Axios.post('http://127.0.0.1:3000/form/file4', 
  //             {
  //               files: '/C:/Users/razvan.mustata/Desktop/pz1.jpg',
  //             })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  onUpload(event: any) {
    console.log(this.uploadedFiles[0]);
}


  BeforeUpload(event: { files: any; }){
    for(let file of this.uploadedFiles) {
      this.uploadedFiles.push(file);
  }  
    var x =  Base64.encode('filgge');
    console.log(x); 
    var y =  Base64.decode(x);
    console.log(y); 
    console.log(this.uploadedFiles.length)
    // for(let file of event.files) {
    //  var x =  Base64.encode(file); 
    // }    
  }
  
  
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
      pdf.line(0, 0, 20, 20)
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

    var doc = new jsPDF('l', 'mm', [700, 700]);
    doc.line(1, 1, 40, 40)
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