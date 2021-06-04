import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import {EditorModule} from 'primeng/editor';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';
import {DropdownModule} from 'primeng/dropdown';
import { CardModule, } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    AccordionModule,
    CardModule,
    DropdownModule,
    FileUploadModule,
    InputTextModule,
    BrowserAnimationsModule,
    CalendarModule,
    EditorModule,
    ButtonModule,
    TabViewModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
