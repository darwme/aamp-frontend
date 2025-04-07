import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconHomeComponent } from './icon-menu.component';
import { IconBoxComponent } from './icon-box';
import { IconCpuBoltComponent } from './icon-cpu-bolt';
import { IconUserComponent } from './icon-user';
import { IconUsersComponent } from './icon-users';
import { IconUsersGroupComponent } from './icon-users-group';
import { IconCaretsDownComponent } from './icon-carets-down';
import { IconLockDotsComponent } from './icon-lock-dots';
import { IconLoginComponent } from './icon-login';
import { IconLogoutComponent } from './icon-logout';
import { IconMailComponent } from './icon-mail';
import { IconMenuComponent } from './icon-menu';
import { IconArrowForwardComponent } from './icon-arrow-forward';



@NgModule({
  declarations: [
    IconHomeComponent,
    IconBoxComponent,
    IconCpuBoltComponent,
    IconUserComponent,
    IconUsersComponent,
    IconUsersGroupComponent,
    IconCaretsDownComponent,
    IconLockDotsComponent,
    IconLoginComponent,
    IconLogoutComponent,
    IconMailComponent,
    IconMenuComponent,
    IconArrowForwardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IconHomeComponent,
    IconBoxComponent,
    IconCpuBoltComponent,
    IconUserComponent,
    IconUsersComponent,
    IconUsersGroupComponent,
    IconCaretsDownComponent,
    IconLockDotsComponent,
    IconLoginComponent,
    IconLogoutComponent,
    IconMailComponent,
    IconMenuComponent,
    IconArrowForwardComponent,
  ]
})
export class IconModule { }
