import { Component} from '@angular/core';
import { HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  sidebarCollapsed = false;
  mobileActive = false;
  pageChange = false;
  closeMenu = true;
  
  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.mobileActive = window.innerWidth <= 768;
    if(!this.mobileActive){
      this.closeMenu = true;
    }

  }


  constructor() { }

  toggleSidebar() {
    console.log("mobilactive en laptop: ", this.mobileActive);
    if(this.mobileActive) {
      this.sidebarCollapsed = !this.sidebarCollapsed;
      this.closeMenu = !this.closeMenu;
    }else{
      this.sidebarCollapsed = !this.sidebarCollapsed;
    }
  }

  onSidebarClosed() {
    this.mobileActive = !this.mobileActive;
  }

  onClose(){
    this.closeMenu = !this.closeMenu;
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  onPageChange() {
    this.pageChange = !this.pageChange;
    this.closeMenu = !this.closeMenu;
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

}