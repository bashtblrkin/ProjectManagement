import {Pipe, PipeTransform} from '@angular/core';
import {Task} from '../interfaces/interfaces';

@Pipe({
  name: 'searchTasks'
})
export class SearchTasksPipe implements PipeTransform {
  transform(tasks: Task[], search: string = ''): Task[] {
    if(!search.trim())
    {
      return tasks
    }

    return tasks.filter(tasks => {
      return tasks.name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
