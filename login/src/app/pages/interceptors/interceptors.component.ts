import { Component } from '@angular/core';
import { LoaderService } from '../service/loader.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interceptors',
  imports: [ProgressSpinnerModule , CommonModule
    
  ],
  templateUrl: './interceptors.component.html',
  styleUrl: './interceptors.component.css'
})
export class InterceptorsComponent {
  user: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access data provided by resolver
    this.user = this.route.snapshot.data['userData'];
  }
}
