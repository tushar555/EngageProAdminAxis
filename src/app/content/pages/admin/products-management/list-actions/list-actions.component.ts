import { Component, OnInit } from '@angular/core';
import { MasterPageObservableService } from '../../../../../core/services/layout/master-page-observable.service';

@Component({
  selector: 'm-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.scss']
})
export class ListActionsComponent implements OnInit {

  constructor(public observable: MasterPageObservableService) {
    this.observable.actionSubject.next({type: '', payload: {'showAddBtn':false}})

   }

  ngOnInit() {
  }

}
