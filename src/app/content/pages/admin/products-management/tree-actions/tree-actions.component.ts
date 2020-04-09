import { Component, OnInit } from '@angular/core';
import { MasterPageObservableService } from '../../../../../core/services/layout/master-page-observable.service';

@Component({
  selector: 'm-tree-actions',
  templateUrl: './tree-actions.component.html',
  styleUrls: ['./tree-actions.component.scss']
})
export class TreeActionsComponent implements OnInit {

  constructor(public observable: MasterPageObservableService) {
    this.observable.actionSubject.next({type: '', payload: {'showAddBtn':false}})

   }

  ngOnInit() {
  }

}
