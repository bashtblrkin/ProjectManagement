import {Inject, Injectable} from '@angular/core';
import {OptimizationCombinedObjectiveFunction} from '../interfaces/interfaces';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RESOURCE_API_URL} from '../../app-injection-tokens';

@Injectable({providedIn: 'root'})
export class OptimizationService {

  constructor(
    private http: HttpClient,
    @Inject(RESOURCE_API_URL) private apiUrl: string
    ) {
  }

  GetAnswerCombinedObjectiveFunction(task: OptimizationCombinedObjectiveFunction): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}api/optimization/combinedfunction`, task)
  }
}
