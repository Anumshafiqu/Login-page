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
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.product = this.route.snapshot.data['productData'];
    console.log("Resolved data:", this.product);
  }
}
