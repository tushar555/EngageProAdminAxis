import { Component, OnInit } from '@angular/core';
import { MasterPageObservableService } from '../../../../../core/services/layout/master-page-observable.service';

@Component({
  selector: 'm-annoucement-actions',
  templateUrl: './annoucement-actions.component.html',
  styleUrls: ['./annoucement-actions.component.scss']
})
export class AnnoucementActionsComponent implements OnInit {

  
  constructor(public observable: MasterPageObservableService) { 
    this.observable.actionSubject.next({type: '', payload: {'showAddBtn':false}})

  }

  ngOnInit() {
 
  }

}
