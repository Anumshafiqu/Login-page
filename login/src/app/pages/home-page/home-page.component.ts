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
    { name: 'John', lastName: 'Doe', website: 'https://johndoe.com', address: '123 Main St', isEditing: false },
    { name: 'Jane', lastName: 'Smith', website: 'https://janesmith.io', address: '456 Oak Ave', isEditing: false },
    { name: 'Alice', lastName: 'Johnson', website: 'https://alicejohnson.org', address: '789 Pine Rd', isEditing: false },
    { name: 'Bob', lastName: 'Brown', website: 'https://bobbrown.net', address: '321 Elm St', isEditing: false }
  ];

  // Enable editing for a row
  editRow(index: number) {
    this.products[index].isEditing = true;
  }

  // Save row and disable editing
  saveRow(index: number) {
    this.products[index].isEditing = false;
  }

  // Add a new editable row
  addNewRow() {
    this.products.push({ name: '', lastName: '', website: '', address: '', isEditing: true });
  }

}
