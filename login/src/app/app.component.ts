import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterceptorsComponent } from './pages/interceptors/interceptors.component';
import { HeaderComponent } from './pages/header/header.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable, pipe } from 'rxjs';
import { LoaderService } from './pages/service/loader.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login';

}
