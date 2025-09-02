import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarModule , ButtonModule , HomePageComponent , ProgressBarModule , DividerModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarVisible = true; // permanent for large screens, toggle for small

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
