import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component'
import { HomepageComponent } from './homepage/homepage.component'
import { ViewComponent } from './view/view.component'
import { ErrorComponent} from  './error/error.component'

const routes: Routes = [
  {
    path: '', component: HomepageComponent // default router view
  },
  {
    path: 'form', component: RegistrationFormComponent
  },
  {
    path: 'view/:id', component: ViewComponent
  },
  {
    path: '**', component: ErrorComponent
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

export const routingComponents = [RegistrationFormComponent, HomepageComponent, ViewComponent]
