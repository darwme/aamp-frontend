import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { AuthService } from '../../../core/services/auth/auth.service';
import { IUsuario } from '../../../users/models/usuario/usuario.model';
import { IToken } from '../../../users/models/auth/token.model';
import { MenuService } from '../../services/menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
  @Output() itemSelected = new EventEmitter<void>();
  @Input() onToggleSidebar = false;
  @Input() collapsed = false;

  userInfo!: IUsuario;
  menuItems: MenuItem[] = [];
  interroute: string = '';
  loading = true;

  constructor(private authService: AuthService, private menuService: MenuService) {
    const token: IToken | null = this.authService.getDecryptToken()
    this.userInfo = token!.sub;
  }
  

  ngOnInit(): void {
    //this.loadMenu();

  }


  onMenuItemClick() {
    this.itemSelected.emit();
  }

  toggleSubMenu(menuItem: MenuItem) {
    menuItem.expanded = !menuItem.expanded;
  }

  onError(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message
    });
  }

  // async loadMenu(): Promise<void> {
  //   try {
  //     const response = await this.menuService.getMenu(this.userInfo.rol.id_rol).toPromise();
  //     const goRoute: { [key: number]: string } = {
  //       1: '/root',
  //       2: '/supervisor',
  //       3: '/estudiante',
  //     };
  //     this.interroute = goRoute[this.userInfo.rol.id_rol];
  //     this.menuItems = response!.data.items;
  //   } catch (error: any) {
  //     console.error('Error loading menu:', error.message);
  //     this.onError(error.message);
  //   } finally {
  //     this.loading = false;
  //   }
  // }

}
