import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
    brand: new FormControl(''),
    gender: new FormControl(''),
    height: new FormControl(''),
    style: new FormControl(''),
    material: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.data = {
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      image: this.myForm.value.image,
      characterizations: {
        brand: this.myForm.value.brand,
        gender: this.myForm.value.gender,
        height: this.myForm.value.height,
        style: this.myForm.value.style,
        material: this.myForm.value.material,
      }
    };

    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {    
  }
}
