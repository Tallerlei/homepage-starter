import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { StyleCheckComponent } from './utilities/style-check/style-check.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'styles', component: StyleCheckComponent },
  { path: 'home', redirectTo: '' },
  { path: 'impressum', component: StyleCheckComponent },
  { path: 'contact', component: StyleCheckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }