import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotherLayoutComponent } from './components/mother-layout/mother-layout.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MotherLayoutComponent,
    children: [
      {
        path: ':id',
        component: ProfileComponent

      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotherRoutingModule { }
