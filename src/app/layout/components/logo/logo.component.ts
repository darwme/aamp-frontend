import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  @Input() collapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  mobileActive = false;

  ngOnInit() {
      this.checkScreenWidth();
    }
  
    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      this.checkScreenWidth();
    }
  
    checkScreenWidth() {
      this.mobileActive = window.innerWidth <= 768;

    }


  onToggleSidebar() {
    this.collapsed = !this.collapsed;
    this.toggleSidebar.emit();
  }

}
