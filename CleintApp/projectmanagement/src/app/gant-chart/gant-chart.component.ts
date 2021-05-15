import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import "dhtmlx-gantt";
import {gantt} from 'dhtmlx-gantt';
import {GantTaskService} from '../shared/services/gant.task.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-gant-chart',
  templateUrl: './gant-chart.component.html',
  styleUrls: ['./gant-chart.component.scss'],
  providers: [GantTaskService]
})
export class GantChartComponent implements OnInit, OnDestroy {

  @ViewChild("ganttHere",{static: true}) ganttContainer: ElementRef;

  constructor(
    private taskService: GantTaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    gantt.config.readonly = true;
    gantt.config.select_task  = false;
    gantt.config.xml_date = "%Y-%m-%d %H:%i";
    gantt.config.grid_width = 400;
    gantt.i18n.setLocale("ru");
    gantt.config.columns=[
      {name:"text",       label:"Задача",  align: "center", width: 200 },
      {name:"start_date", label:"Начало", align: "center", width: 100 },
      {name: "end_date", label:"Конец", align: "center", width: 100}
    ];
    gantt.init(this.ganttContainer.nativeElement);
    Promise.all([this.taskService.get(this.route.snapshot.params['id'])])
      .then(([data]) => {
        gantt.parse({data});
      });
  }

  ngOnDestroy() {
    gantt.clearAll()
  }

}
