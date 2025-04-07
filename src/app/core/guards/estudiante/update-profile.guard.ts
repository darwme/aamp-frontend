import { EstadoInfoResponse } from './../../models/usuario/usuario.model';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UsuarioServiceService } from '../../services/usuario/usuario-service.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import Swal from 'sweetalert2';

export const updateProfileGuard: CanActivateFn = (route, state) => {
  // Inyectar dependencias
  const router = inject(Router);
  const authService = inject(AuthService);
  const usuarioService = inject(UsuarioServiceService);
  const usuario: any = authService.getDecryptToken();
  const id_usuario= usuario?.sub?.id_usuario;

  if (!id_usuario) {
    authService.logout();
    return of(false);
  }

  return usuarioService.getEstadoInfo(id_usuario).pipe(
    map((response: EstadoInfoResponse) => {
      if (response.status === 200 && response.data !== undefined) {
        if (response.data === false) {
          
          router.navigate(['/estudiante/actualizar-perfil']);
          onInfo('Actualice datos de su perfil de estudiante');
          return false;
        }
        else {
          return true;
        }
        
      }
      else {
        authService.logout();
        return false;
      }
    }),
    catchError((error) => {
      authService.logout()
      return of(false);
    })
  );
  
};

function onInfo(message: string): void {
    Swal.fire({
      icon: 'info',
      title: 'Información',
      text: message
    });
}