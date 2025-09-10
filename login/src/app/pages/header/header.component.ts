import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-header',
  imports: [AvatarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router = inject(Router);

  logout() {
    // Clear user session
    localStorage.removeItem('angular19Token');
    localStorage.removeItem('angular19user');

    // Navigate back to login
    this.router.navigateByUrl('login');
  }
}
