import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TinmarmapComponent } from './tinmarmap/tinmarmap.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'map', component: TinmarmapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
