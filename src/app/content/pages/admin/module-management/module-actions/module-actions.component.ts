import { Component, OnInit } from '@angular/core';
import { MasterPageObservableService } from '../../../../../core/services/layout/master-page-observable.service';

@Component({
  selector: 'm-module-actions',
  templateUrl: './module-actions.component.html',
  styleUrls: ['./module-actions.component.scss']
})
export class ModuleActionsComponent implements OnInit {

  constructor(public observable: MasterPageObservableService) { 
    this.observable.actionSubject.next({type: '', payload: {'showAddBtn':false}})

  }

  ngOnInit() {
  }

}
