import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver',
  imports: [NgIf],
  templateUrl: './resolver.component.html',
  styleUrl: './resolver.component.css'
})
export class ResolverComponent {
  user: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.data['data'];
    console.log("Resolved user:", this.user);
  }
}
