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
  submitted: boolean = false
  answer: number
  answergetted: boolean = false
  answerString: string = ''
  error: boolean = false

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
    const optimizationTask: OptimizationCombinedObjectiveFunction = {
      width: this.columns,
      height: this.rows,
      Data: this.form.controls['matrix'].value,
      Weight: this.form.controls['priority'].value,
      Direction: this.form.controls['direction'].value
    }
    this.optimizationService.GetAnswerCombinedObjectiveFunction(optimizationTask).subscribe(res => {
      this.answer = res
      this.answerString = (document.getElementById(`answer.${this.answer}`) as HTMLInputElement).value
      this.submitted = false
      this.answergetted = true
    }, error => {
      if (error.error === "Invalid values")
      {
        this.error = true
      }
      this.submitted = false
    })
  }


}
