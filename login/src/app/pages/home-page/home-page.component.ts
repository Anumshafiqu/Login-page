import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule , NgIf, NgFor, ButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  products = [
    { name: 'Laptop', price: 1000, category: 'Electronics', isEditing: false },
    { name: 'Phone', price: 500, category: 'Electronics', isEditing: false }
  ];

  editRow(index: number) {
    this.products[index].isEditing = true;
  }

  saveRow(index: number) {
    this.products[index].isEditing = false;
  }

  addNewRow() {
    this.products.push({ name: '', price: 0, category: '', isEditing: true });
  }

}
