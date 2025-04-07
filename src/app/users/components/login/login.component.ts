import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { IUsuario, LoginModel, RolModel } from '../../models/usuario/usuario.model';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { IUniversidad } from '../../../core/models/universidad/universidad.model';
import { loginResponseError } from '../../models/auth/credentials.model';
import { IToken } from '../../models/auth/token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userId: string = '';
  rol?: string;
  token: string;
  loginForm: FormGroup;
  universidadSeleccionada: IUniversidad | null = null;
  loginSubmmit: LoginModel;
  id_rol?: number;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService){
    this.token = '';
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      rememberMe: [false]
    });
    this.loginSubmmit = {
      email: '',
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {

  }

  onSuccess(message: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message
    });
  }

  onError(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message
    });
  }

  onSubmit(): void {
    if(this.loginForm.valid){
      this.loginSubmmit = {
        email: this.loginForm.get('email')?.value,
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      }
      this.authService.login(this.loginSubmmit).subscribe(
        (response) => {
          this.userId = response?.data?.userId || '';

          const rol = this.authService.getUserRol(this.userId).subscribe(
            (response: any) => {
              console.log('data', response.data);
              const data = response.data;
              this.rol = data[0];
              localStorage.setItem('userId', this.userId);
              localStorage.setItem('rol', this.rol?.toString() || '');
              this.token = response.data.accessToken;
              localStorage.setItem('token', this.token);

              if(this.rol === 'admin'){
                this.router.navigate(['/admin']);
              
              }else if(this.rol === 'mother'){
                this.router.navigate(['/mother']);
              }
    
            }
          );
        },
        (error: any) => {
          console.log(error.error);
          this.onError(error.error.message);
        }
      );
    }
  }

}
