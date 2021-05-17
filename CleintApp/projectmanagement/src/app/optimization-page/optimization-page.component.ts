import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-optimization-page',
  templateUrl: './optimization-page.component.html',
  styleUrls: ['./optimization-page.component.scss']
})
export class OptimizationPageComponent implements OnInit {

  rows: number = 3
  columns: number = 4
  form = new FormArray([])
  constructor() { }


  ngOnInit(): void {
    this.updateMatrix()
  }

  updateMatrix() {
    this.form.clear()
    for (let i = 0; i < this.rows; i++) {
      this.form.push(new FormArray([]))
      for (let j = 0; j < this.columns; j++) {
        (this.form.at(i) as FormArray).push(new FormControl())
      }
    }
  }
}
