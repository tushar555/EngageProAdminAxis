import { Component, OnInit } from '@angular/core';
import { MasterPageObservableService } from '../../../../../core/services/layout/master-page-observable.service';

@Component({
  selector: 'm-spoc-actions',
  templateUrl: './spoc-actions.component.html',
  styleUrls: ['./spoc-actions.component.scss']
})
export class SpocActionsComponent implements OnInit {

  constructor(public observable: MasterPageObservableService) { 
    this.observable.actionSubject.next({type: '', payload: {'showAddBtn':false}})

  }

  ngOnInit() {
  }

}
