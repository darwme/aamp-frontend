import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth/auth.service';
import { MenuService } from '../layout/services/menu.service';
import { MenuItem } from '../layout/models/menu-item.model';
import { toggleAnimation } from '../core/shared/animations';

import Swal from 'sweetalert2';
import { IconModule } from "../core/shared/icon/icon.module";
import { IToken } from '../users/models/auth/token.model';
import { LayoutModule } from "../layout/layout.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, IconModule, LayoutModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [toggleAnimation]
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;
  isCollapsed = false;
  role!: number;
  menuItems: MenuItem[] = [];
  interroute: string = '';
  loading = true;
  userInfo!: any;

  constructor(private authService: AuthService, private menuService: MenuService) {}

  ngOnInit(): void {
    if (this.authService.checkToken()) {
      this.isAuthenticated = true;
      const token = this.authService.getDecryptToken() as IToken;  // Realizamos un casting seguro al tipo IToken
      this.userInfo = token.sub;
      this.role = this.userInfo.rol.id_rol;
      this.loadMenu();
    }
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
    this.isCollapsed = false;
  }

  async loadMenu(): Promise<void> {
    try {
      const response = await this.menuService.getMenu(this.role).toPromise();
      const goRoute: { [key: number]: string } = {
        1: '/root',
        2: '/supervisor',
        3: '/estudiante',
      };
      this.interroute = goRoute[this.role] || '';
      this.menuItems = response?.data.items || [];
    } catch (error: any) {
      console.error('Error loading menu:', error.message);
      this.onError('Hubo un error al cargar el menú. Por favor, inténtalo de nuevo.');
    } finally {
      this.loading = false;
    }
  }

  onError(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message
    });
  }
}
