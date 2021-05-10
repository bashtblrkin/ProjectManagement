import {Pipe, PipeTransform} from '@angular/core';
import {minProject} from '../interfaces/interfaces';


@Pipe({
  name: 'searchProjects'
})
export class SearchProjectsPipe implements PipeTransform{
  transform(projects: minProject[], search = ''): minProject[] {
    if(!search.trim())
    {
        return projects
    }

    return projects.filter(projects => {
        return projects.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}
