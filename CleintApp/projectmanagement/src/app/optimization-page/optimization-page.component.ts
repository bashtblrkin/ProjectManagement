import {Component, ElementRef, OnInit} from '@angular/core';
import {AbstractControl, Form, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {OptimizationCombinedObjectiveFunction} from '../shared/interfaces/interfaces';
import {OptimizationService} from '../shared/services/optimization.service';

@Component({
  selector: 'app-optimization-page',
  templateUrl: './optimization-page.component.html',
  styleUrls: ['./optimization-page.component.scss']
})
export class OptimizationPageComponent implements OnInit {

  rows: number = 2
  columns: number = 2
  countColumns: number[] = []
  form: FormGroup
  answerArrayName: any
  answerArrayNumber: any = []
  submitted: boolean = false
  answergetted: boolean = false
  error: boolean = false
  secondError: boolean = false

  constructor(
    private optimizationService: OptimizationService
  ) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      matrix: new FormArray([]),
      priority: new FormArray([]),
      direction: new FormArray([])
    })
    this.updateMatrix()
  }

  updateMatrix() {
    this.countColumns = []
    if (this.columns < 2)
    {
      this.columns = 2
    }
    if (this.columns > 5)
    {
      this.columns = 5
    }
    if (this.rows < 2)
    {
      this.rows = 2
    }
    for (let i =0; i < this.columns; i++)
    {
      this.countColumns.push(i)
    }

    (this.form.controls['matrix'] as FormArray).clear();
    (this.form.controls['direction'] as FormArray).clear();
    (this.form.controls['priority'] as FormArray).clear()
    for (let i = 0; i < this.rows; i++) {
      (this.form.controls['matrix'] as FormArray).push(new FormArray([]))
      for (let j = 0; j < this.columns; j++) {
        ((this.form.controls['matrix'] as FormArray).at(i) as FormArray).push(new FormControl('', [Validators.required]))
      }
    }
    for (let i = 0; i < this.columns; i++)
    {
      (this.form.controls['priority'] as FormArray).push(new FormControl('', [Validators.required]));
      (this.form.controls['direction'] as FormArray).push(new FormControl('1', [Validators.required]))
    }
  }


  getMatrixControls(form: FormGroup) {
    return (this.form.get('matrix') as FormArray).controls as any
  }

  getPriorityControls(form: FormGroup) {
    return (this.form.get('priority') as FormArray).controls as any
  }

  getDirectionControls(form: FormGroup) {
    return (this.form.get('direction') as FormArray).controls as any
  }

  getAnswer() {
    if (this.form.invalid)
    {
      return
    }
    this.submitted = true
    this.error = false
    this.secondError = false
    this.answergetted = false
    const optimizationTask: OptimizationCombinedObjectiveFunction = {
      width: this.columns,
      height: this.rows,
      Data: this.form.controls['matrix'].value,
      Weight: this.form.controls['priority'].value,
      Direction: this.form.controls['direction'].value
    }
    this.optimizationService.GetAnswerCombinedObjectiveFunction(optimizationTask).subscribe(res => {

      let answerObj: any = {}
      for (let i =0; i < this.rows; i++)
      {
        answerObj[(document.getElementById(`answer.${i}`) as HTMLInputElement).value] = res.answerArr[i]
      }
      console.log(answerObj)

      if (res.dir === 'min')
      {
        this.answerArrayName = Object.keys(answerObj).sort((a, b) => answerObj[a] - answerObj[b])
      }
      if (res.dir === 'max')
      {
        this.answerArrayName = Object.keys(answerObj).sort((a, b) => answerObj[b] - answerObj[a])
      }

      for (let i = 0; i < this.rows; i++)
      {
        this.answerArrayNumber[i] = answerObj[this.answerArrayName[i]]
      }
      console.log(this.answerArrayNumber)


      let min = this.answerArrayNumber[0]
      for (let i = 1; i < this.rows; i++)
      {
        if (this.answerArrayNumber[i] < min)
        {
          min = this.answerArrayNumber[i]
        }
      }
      min = Math.abs(min)
      console.log(min)
      for (let i = 0; i < this.rows; i++)
      {
        this.answerArrayNumber[i] = ((this.answerArrayNumber[i]+min)*100)+1
      }

      let max = this.answerArrayNumber[0]
      for (let i = 1; i < this.rows; i++)
      {
        if (this.answerArrayNumber[i] > max)
        {
          max = this.answerArrayNumber[i]
        }
      }
      min = this.answerArrayNumber[0]
      for (let i = 1; i < this.rows; i++)
      {
        if (this.answerArrayNumber[i] < min)
        {
          min = this.answerArrayNumber[i]
        }
      }
      const delta = 100/max
      console.log(delta)
      if (res.dir === 'min')
      {
        for (let i = 0; i < this.rows; i++)
        {
          if (this.answerArrayNumber[i] == min) {
            this.answerArrayNumber[i] = 100
          } else if (this.answerArrayNumber[i] == max) {
            this.answerArrayNumber[i] = 0
          } else {
            this.answerArrayNumber[i] = Math.trunc(100 - this.answerArrayNumber[i]*delta)

          }
        }
      }

      if (res.dir === 'max')
      {
        for (let i = 0; i < this.rows; i++)
        {
          if (this.answerArrayNumber[i] == max) {
            this.answerArrayNumber[i] = 100
          } else if (this.answerArrayNumber[i] == min) {
            this.answerArrayNumber[i] = 0
          } else {
            this.answerArrayNumber[i] = Math.trunc(this.answerArrayNumber[i]*delta)

          }
        }
      }

      this.submitted = false
      this.answergetted = true
    }, error => {
      if (error.error === "Invalid values")
      {
        this.error = true
      } else {
        this.secondError = true
      }
      this.submitted = false
    })
  }


}
