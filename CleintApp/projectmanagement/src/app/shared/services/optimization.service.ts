import {Inject, Injectable} from '@angular/core';
import {OptimizationAnswer, OptimizationCombinedObjectiveFunction} from '../interfaces/interfaces';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RESOURCE_API_URL} from '../../app-injection-tokens';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class OptimizationService {

  constructor(
    private http: HttpClient,
    @Inject(RESOURCE_API_URL) private apiUrl: string
    ) {
  }

  GetAnswerCombinedObjectiveFunction(task: OptimizationCombinedObjectiveFunction): Observable<OptimizationAnswer> {
    return this.http.post<OptimizationAnswer>(`${this.apiUrl}api/optimization/combinedfunction`, task)
  }
}
