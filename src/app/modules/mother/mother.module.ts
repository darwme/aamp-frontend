import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importado para [(ngModel)] y [formGroup]

import { MotherRoutingModule } from './mother-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { MotherLayoutComponent } from './components/mother-layout/mother-layout.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MotherLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MotherRoutingModule
  ]
})
export class MotherModule { }
