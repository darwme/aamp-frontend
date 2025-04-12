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
  showAdditionalInfo: boolean = false;
  additionalPanelVisible: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      due_date: [''],
      baby_birth_date: [''],
      notes: [''],
      acceptTerms: [false, Validators.requiredTrue],
      weight: [null],
      height: [null],
      blood_type: [null],
      allergies: [null],
      medical_history: [null],
      fecha_nacimiento: [null],
      semanas_gestacion: [null],
      numero_de_hijos: [null],
      tipo_embarazo: [null],
      plan_parto: [null],
      fecha_ultimo_control: [null],
      mother_concept: [null]
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
      notes: formValue.notes,
      // Campos adicionales del perfil de la madre
      weight: formValue.weight,
      height: formValue.height,
      blood_type: formValue.blood_type,
      allergies: formValue.allergies,
      medical_history: formValue.medical_history,
      fecha_nacimiento: formValue.fecha_nacimiento,
      semanas_gestacion: formValue.semanas_gestacion,
      numero_de_hijos: formValue.numero_de_hijos,
      tipo_embarazo: formValue.tipo_embarazo,
      plan_parto: formValue.plan_parto,
      fecha_ultimo_control: formValue.fecha_ultimo_control,
      mother_concept: formValue.mother_concept
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

  toggleAdditionalInfo(event: any): void {
    this.showAdditionalInfo = event.target.value === 'yes';
    this.additionalPanelVisible = this.showAdditionalInfo; // abre el panel por defecto si se selecciona "Sí"
  }
}
