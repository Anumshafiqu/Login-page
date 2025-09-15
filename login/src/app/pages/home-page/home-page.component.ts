import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
interface Product {
  id?: string;
  name?: string;
  address?: string;
  website?: string;
}

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, ButtonModule, NgIf ,  ReactiveFormsModule, NgFor, DialogModule, InputTextModule, TableModule , ToastModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
    providers: [MessageService],
})
export class HomePageComponent {

  messageService = inject(MessageService);
   products: any[] = [];
  productForm!: FormGroup;
  productDialog: boolean = false;
  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.loadDummyData();
  }

  initForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      website: ['', [Validators.required, Validators.pattern('https?://.+')]],
      phones: this.fb.array([this.createPhoneField()])
    });
  }

  createPhoneField(): FormGroup {
    return this.fb.group({
      number: ['', Validators.required]
    });
  }

  get phones(): FormArray {
    return this.productForm.get('phones') as FormArray;
  }

  addPhone(showValidation: boolean = true) {
    const lastPhone = this.phones.at(this.phones.length - 1);
      if (showValidation && lastPhone && lastPhone.invalid) {
    lastPhone.markAsTouched();
    this.messageService.clear(); // clear old toasts
    this.messageService.add({
      severity: 'warn',
      summary: 'Incomplete Field',
      detail: 'Please fill the previous phone number before adding a new one.',
      life: 3000
    });
    return; // stop, don’t add new phone
  }

    this.phones.push(this.createPhoneField());

  
  }

  removePhone(index: number) {
    if (this.phones.length > 1) {
      this.phones.removeAt(index);
    }
  }

  openNew() {
    this.productForm.reset();
    this.phones.clear();
    this.addPhone(false);
    this.editIndex = null;
    this.productDialog = true;
  }

  editProduct(product: any, index: number) {
    this.productForm.patchValue({
      name: product.name,
      lastName: product.lastName,
      website: product.website
    });

    this.phones.clear();
    product.phones.forEach((p: any) => {
      this.phones.push(this.fb.group({ number: p.number }));
    });

    this.editIndex = index;
    this.productDialog = true;
  }

saveProduct() {
    // ✅ mark all fields and nested controls as touched
    this.markFormGroupTouched(this.productForm);
  if (this.productForm.invalid) {
    this.productForm.markAllAsTouched();
    this.messageService.clear();
    this.messageService.add({
      severity: 'error',
      summary: 'Validation Error',
      detail: 'Please fill all required fields before saving.',
      life: 3000
    });
    return;
  }

  const formValues = this.productForm.value;

  if (this.editIndex !== null) {
    this.products[this.editIndex] = formValues;
    this.editIndex = null;
  } else {
    this.products.push(formValues);
  }

  this.productDialog = false;
  this.productForm.reset();
  this.phones.clear();
  this.addPhone(false);

  //  success toast only once
  this.messageService.clear();
  this.messageService.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Data saved successfully!',
    life: 3000
  });
}
  deleteProduct(index: number) {
    this.products.splice(index, 1); // removes product from array
  }
  //  Recursive function to mark all FormGroup/FormArray/FormControl as touched
  markFormGroupTouched(formGroup: FormGroup | FormArray) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }


  loadDummyData() {
    this.products = [
      { name: 'John', lastName: 'Doe', website: 'https://johndoe.com', phones: [{ number: '1234567890' }] },
      { name: 'Jane', lastName: 'Smith', website: 'https://janesmith.io', phones: [{ number: '5555555555' }] },
      { name: 'Alice', lastName: 'Johnson', website: 'https://alicejohnson.org', phones: [{ number: '9876543210' }] },
      { name: 'Bob', lastName: 'Brown', website: 'https://bobbrown.net', phones: [{ number: '1122334455' }] }
    ];
  }





}
