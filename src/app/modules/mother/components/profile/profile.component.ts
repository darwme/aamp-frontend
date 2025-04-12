import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MotherService } from '../../services/mother.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  due_date: string = '';
  baby_birth_date: string = '';
  profileForm: FormGroup; // nuevo formulario reactivo
  userId: string = localStorage.getItem('userId') || '';
  showAdditionalInfo: boolean = false;
  additionalPanelVisible: boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private motherService: MotherService
  ) {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      due_date: ['', Validators.required],
      baby_birth_date: ['', Validators.required],
      notes: [''],
      // Nuevos campos opcionales
      weight: [''],
      height: [''],
      blood_type: [''],
      allergies: [''],
      medical_history: [''],
      fecha_nacimiento: [''],
      semanas_gestacion: [null],
      numero_de_hijos: [null],
      tipo_embarazo: [''],
      plan_parto: [''],
      fecha_ultimo_control: [''],
      mother_concept: ['']
    });
  }

  ngOnInit(): void {
    const id: string = localStorage.getItem('userId') || '';
    if (!id.trim()) {
      console.error('El ID de la madre está vacío o no se encontró en el local storage.');
      this.router.navigate(['/auth/login']).then(() => {
        localStorage.clear();
      });
    }
    this.motherService.getMotherInfo(id).subscribe(data => {
      this.profileForm.patchValue(data.data);
      this.due_date = data.data.due_date;
      this.baby_birth_date = data.data.baby_birth_date;
    });
  }

  updateMother(): void {
    if (this.profileForm.valid) {
      const requestPayload = this.buildUpdateRequest();
      this.motherService.updateMother(requestPayload, this.userId).subscribe(response => {
        alert('Información actualizada');
      });
    }
  }

  // Nuevo método para armar el request correctamente
  private buildUpdateRequest(): any {
    const formValue = this.profileForm.value;
    console.log('Form Value:', formValue); // Verifica el valor del formulario
    return {
      username: formValue.username,
      email: formValue.email,
      due_date: formValue.due_date,
      baby_birth_date: formValue.baby_birth_date,
      notes: formValue.notes,
      // Nuevos campos opcionales
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
    };
  }

  deleteMother(userId: string): void {
    this.motherService.deleteMother(userId).subscribe(response => {
      alert('Perfil eliminado');

      //retornar al login
      this.router.navigate(['/auth/login']).then(() => {
        localStorage.clear();
      });

    });
  }

  toggleAdditionalInfo(event: any): void {
    this.showAdditionalInfo = event.target.value === 'yes';
    this.additionalPanelVisible = this.showAdditionalInfo;
  }
}
