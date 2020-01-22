import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule }    from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserServiceService } from './services/user-service.service';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    RegistrationListComponent,
    HomepageComponent,
    ViewComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    DragDropModule,
    HttpClientModule,
    SweetAlert2Module,
    // swal format [title: string, text: string (, icon: string)]
    SweetAlert2Module.forRoot(),
    SweetAlert2Module.forChild({ /* options */ }),
    MatGridListModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
