import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bike',
  imports: [ReactiveFormsModule],
  templateUrl: './bike-component.html',
  styleUrl: './bike-component.scss'
})
export class BikeComponent {
  @Input() bike!: BikeComponent;

  bikeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bikeForm = this.fb.group({
      id: [{ value: '', disabled: true }], // readonly
      model: ['', Validators.required],
      imageSource: [''],
      stock: [0, [Validators.required, Validators.min(0)]],
      details: [''],
      electric: [false],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['bike'] && this.bike) {
      this.bikeForm.patchValue(this.bike);
    }
  }

  onSubmit() {
    if (this.bikeForm.valid) {
      const updatedBike = {
        ...this.bike,
        ...this.bikeForm.getRawValue() // includes disabled fields
      };
      console.log('Edited bike:', updatedBike);

      // TODO: Send updatedBike to backend service
    }
  }
}
