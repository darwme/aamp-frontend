import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutComponent } from './components/layout/layout.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { BreadcumbComponent } from './components/breadcumb/breadcumb.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LayoutComponent,
    IconNavComponent,
    BreadcumbComponent,
    LogoComponent,
    NavMobileComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    SharedModule
],
exports: [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  LogoComponent,
  LayoutComponent,
  NavMobileComponent,
  IconNavComponent,
  BreadcumbComponent,
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
