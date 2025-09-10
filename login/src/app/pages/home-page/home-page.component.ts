import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
interface Product {
  id?: string;
  name?: string;
  address?: string;
  website?: string;
}

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, ButtonModule, NgIf ,  ReactiveFormsModule, NgFor, DialogModule, InputTextModule, TableModule , NgClass],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  // products = [
  //   { name: 'John', lastName: 'Doe', website: 'https://johndoe.com', address: '123 Main St', isEditing: false },
  //   { name: 'Jane', lastName: 'Smith', website: 'https://janesmith.io', address: '456 Oak Ave', isEditing: false },
  //   { name: 'Alice', lastName: 'Johnson', website: 'https://alicejohnson.org', address: '789 Pine Rd', isEditing: false },
  //   { name: 'Bob', lastName: 'Brown', website: 'https://bobbrown.net', address: '321 Elm St', isEditing: false }
  // ];

  // displayDialog = false;
  // productForm!: FormGroup;
  // fb = inject(FormBuilder);

  // ngOnInit(): void {
  //   this.initForm();
  // }

  // initForm() {
  //   this.productForm = this.fb.group({
  //     name: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     website: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?([\w\d-]+\.){1,2}[a-z]{2,6}(\/.*)?$/i)]],
  //     address: ['', Validators.required]
  //   });
  // }

  // showDialog() {
  //   this.displayDialog = true;
  //   this.initForm(); // Reset form each time
  // }

  // saveProduct() {
  //   if (this.productForm.invalid) {
  //     this.productForm.markAllAsTouched();
  //     return;
  //   }

  //   this.products.push(this.productForm.value);
  //   this.displayDialog = false;
  // }


  // editRow(index: number) {
  //   this.products[index].isEditing = true;
  // }

  // saveRow(index: number) {
  //   if (!this.products[index].name || !this.products[index].lastName || !this.products[index].website || !this.products[index].address) {
  //     alert("All fields are required!");
  //     return;
  //   }
  //   this.products[index].isEditing = false;
  // }

  // addNewRow() {
  //   this.products.push({ name: '', lastName: '', website: '', address: '', isEditing: true });
  // }



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

  addPhone() {
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
    this.addPhone();
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
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
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
    this.addPhone();
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
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
