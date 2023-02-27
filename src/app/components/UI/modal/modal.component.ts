import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if(this.data) this.isNew = false;
  }

  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? null),
    price: new FormControl(this.data?.price ?? null),
    image: new FormControl(this.data?.image ?? null),
    brand: new FormControl(this.data?.characterizations.brand ?? null),
    gender: new FormControl(this.data?.characterizations.gender ?? null),
    height: new FormControl(this.data?.characterizations.height ?? null),
    style: new FormControl(this.data?.characterizations.style ?? null),
    material: new FormControl(this.data?.characterizations.material ?? null)
  });

  isNew: boolean = true;

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit(): void {
    this.data = {
      id: this.myForm.value.id,
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
