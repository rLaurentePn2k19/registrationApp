import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component'

const routes: Routes = [
  // {
  //   path: ' ', redirectTo: '/dashboard', pathMatch: 'full' // default router view
  // },
  {
    path: 'reactiveComponent', component: RegistrationFormComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [RegistrationFormComponent]
