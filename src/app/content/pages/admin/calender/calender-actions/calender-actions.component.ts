import { Component, OnInit } from '@angular/core';
import { MasterPageObservableService } from '../../../../../core/services/layout/master-page-observable.service';

@Component({
  selector: 'm-calender-actions',
  templateUrl: './calender-actions.component.html',
  styleUrls: ['./calender-actions.component.scss']
})
export class CalenderActionsComponent implements OnInit {

  constructor(public observable: MasterPageObservableService) { 
    this.observable.actionSubject.next({type: '', payload: {'showAddBtn':false}})

  }

  ngOnInit() {
  }

}
