import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppImprintComponent } from './main/app-imprint/app-imprint.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { StyleCheckComponent } from './utilities/style-check/style-check.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'styles', component: StyleCheckComponent },
  { path: 'home', redirectTo: '' },
  { path: 'imprint', component: AppImprintComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }