import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LogoutComponent } from '../users/components/logout/logout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconModule } from "../core/shared/icon/icon.module";

@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    IconModule
  ],
  exports: [
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    IconModule,
    LogoutComponent
  ]
})
export class SharedModule { }
