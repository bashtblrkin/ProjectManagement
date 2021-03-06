import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DatasearchService {
  searchStr = new Subject<string>()
  updateUserLayout = new Subject()
}
