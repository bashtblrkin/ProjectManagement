import {Pipe, PipeTransform} from '@angular/core';
import {TaskUser} from '../interfaces/interfaces';

@Pipe({
  name: 'SearchProjectTasks'
})
export class SearchProjectTasksPipe implements PipeTransform {
  transform(tasks: TaskUser[], search = ''): TaskUser[] {
    if(!search.trim())
    {
      return tasks
    }

    return tasks.filter(tasks => {
      return tasks.project.toLowerCase().includes(search.toLowerCase())
    })
  }

}
