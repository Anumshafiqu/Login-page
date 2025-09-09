import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet , SidebarComponent , HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
//   constructor(){
//     this.getuser()
//   }
// getuser() {
//   this.http.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers").subscribe((res:any)=>{
//     debugger;
//   })
// }
// http = inject(HttpClient);
}
