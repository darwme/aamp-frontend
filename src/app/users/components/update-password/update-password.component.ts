import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../core/services/data/data.service';
import { UpdatePasswordRequest } from '../../models/auth/update-password.model';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  updatePasswordForm: FormGroup;
  correo?: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private data: DataService<string>,
  ) {
    this.updatePasswordForm = this.fb.group({
      correo: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      token: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.correo = this.data.getData() ?? '';
    if (!this.correo) {
      this.router.navigate(['/auth/forgot-password']);
    }
    this.updatePasswordForm.get('correo')?.setValue(this.correo);

  }

  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const newPassword = form.get('newPassword');
    const confirmPassword = form.get('confirmPassword');
    if (newPassword?.value !== confirmPassword?.value) {
      return { mismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.updatePasswordForm.invalid) {
      return;
    }

    const request: UpdatePasswordRequest = {
      correo: this.correo?.toString() ?? '',
      token: this.updatePasswordForm.value.token,
      contrasena: this.updatePasswordForm.value.newPassword
    }

    this.authService.updatePasswordToken(request).subscribe(
      (response: any) => {
        this.onSuccess(response.message);
        this.router.navigate(['/auth/login']);
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