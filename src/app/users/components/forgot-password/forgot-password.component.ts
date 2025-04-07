import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import Swal from 'sweetalert2';
import { IExceptionResponse } from '../../../core/models/base/exceptionResponse.model';
import { ForgotPasswordRequest, ForgotPasswordResponse } from '../../models/auth/credentials.model';
import { UpdatePasswordRequest } from '../../models/auth/update-password.model';
import { DataService } from '../../../core/services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  request?: ForgotPasswordRequest;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private data: DataService<string>,
    private router: Router
  ) { 
    this.forgotPasswordForm = this.fb.group({
      correo: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }



  ngOnInit(): void {
      
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    this.authService.forgotPassword(this.forgotPasswordForm.value)
    .subscribe(
      (response: ForgotPasswordResponse) => {
        this.data.setData(this.forgotPasswordForm.value.correo);
        console.log('correo eniado:', this.forgotPasswordForm.value.correo);
        this.onSuccess(response.message);
        const fullUrl = `${window.location.origin}${this.router.serializeUrl(this.router.createUrlTree(['/auth/update-password']))}`;
        console.log('Navegando a la ruta completa:', fullUrl);
        this.router.navigate(['/auth/update-password']);
      },
      (error: any) => {
        console.log(`Error ${error.status}: ` + error.error);
        this.onError(error.message);
      }
    );
  }

  onSuccess(message: string): void {
    Swal.fire({
      title: '¡Éxito!',
      text: message,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  onError(message: string): void {
    Swal.fire({
      title: '¡Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }

}
