import { Component, Output, EventEmitter, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Input() itemsBreadcumb: Array<{name: string, url: string}> = [];

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
    this.toggleSidebar.emit();
  }
}
