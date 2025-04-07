import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUniversidad } from '../../../core/models/universidad/universidad.model';
import Swal from 'sweetalert2';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  universidadSeleccionada: IUniversidad | null = null;
  registerForm: FormGroup;
  errorMessage = '';
  hasError = false;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      due_date: [''],
      baby_birth_date: [''],
      notes: [''],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSubmit(): void {
    if (!this.registerForm.valid) {
      this.errorMessage = 'Por favor, complete todos los campos';
      this.hasError = true;
      return;
    }

    this.errorMessage = '';
    this.hasError = false;
    const formValue = this.registerForm.value;

    this.authService.register({
      username: formValue.username,
      email: formValue.email,
      password: formValue.password,
      due_date: formValue.due_date,
      baby_birth_date: formValue.baby_birth_date,
      notes: formValue.notes
    }).subscribe(
      (response) => {
        this.onSuccess(response.message);
      },
      (error) => {
        this.onError(error.error.message);
      }
    );
  }

  onSearchCleared(value: string): void {
    this.registerForm.patchValue({ correoLast: '' });
  }

  onSuccess(message: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message
    }).then((result) => {
      if (result.isConfirmed) {
        this.registerForm.reset();
        this.router.navigate(['/auth/login']);
      }
    });
  }

  onError(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message
    }).then((result) => {
      if (result.isConfirmed) {
        this.registerForm.reset();
      }
    });
  }

  onUniversidadSelected(universidad: IUniversidad): void {
    this.universidadSeleccionada = universidad;
    this.modifyUniversidad();
  }

  modifyUniversidad(): void {
    let domain = this.universidadSeleccionada?.dominio || '';
    domain = domain.replace('https://', '');
    domain = domain.replace('http://', '');
    domain = domain.replace('/', '');
    this.registerForm.get('correoLast')?.setValue(`@${domain}`);
  }

  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      this.errorMessage = 'Las contraseñas no coinciden';
      this.hasError = true;
      return { notSame: true };
    }
    return null;
  }
}
