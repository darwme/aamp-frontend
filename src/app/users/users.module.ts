import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
//import { LogoutComponent } from './components/logout/logout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    //LogoutComponent,
    ForgotPasswordComponent,
    AuthLayoutComponent,
    UpdatePasswordComponent
  ],
  imports: [MatIconModule, SharedModule,MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, CommonModule, UsersRoutingModule, ReactiveFormsModule, MatAutocompleteModule],
})
export class UsersModule {}
