import { Component, OnInit } from '@angular/core';
import { MasterPageObservableService } from '../../../../../core/services/layout/master-page-observable.service';

@Component({
  selector: 'm-task-actions',
  templateUrl: './task-actions.component.html',
  styleUrls: ['./task-actions.component.scss']
})
export class TaskActionsComponent implements OnInit {

  constructor(public observable: MasterPageObservableService) {
    this.observable.actionSubject.next({type: '', payload: {'showAddBtn': false}});

   }

  ngOnInit() {
  }

}
