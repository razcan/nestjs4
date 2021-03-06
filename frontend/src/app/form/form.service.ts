import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  
  allForms:any= [];
  url = '/api/form';

  constructor(private httpClient:HttpClient) { }

  getAllForms(): Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(this.url);
  }

  allFormsFiltered:any= [];
  urlFiltered: any =[];
 
  getAllEmployeesfilter(val:any): Observable<Array<any>>{
    this.urlFiltered = '/api/form/'+val;
    this.allFormsFiltered = this.httpClient.get<Array<any>>(this.urlFiltered);
    return  this.urlFiltered;
  }

  create_new_form(val:any): Observable<any[]> {
    return this.httpClient.post<Array<any>>(this.url,val);
}

}