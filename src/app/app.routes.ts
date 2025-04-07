
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'mother',
    loadChildren: () => import('./modules/mother/mother.module').then(m => m.MotherModule),
  }
  
];