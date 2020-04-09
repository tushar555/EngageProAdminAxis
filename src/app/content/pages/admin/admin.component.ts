import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ComponentLifecycle} from '../components/ComponentLifecycle';
import {BaseAdminComponent} from './BaseAdminComponent';
import {MasterPageObservableService} from '../../../core/services/layout/master-page-observable.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private route: Router, public observable:MasterPageObservableService) {
		this.observable.actionSubject.next({type: '', payload: {'title':'','path':'', 'showAddBtn':false}})
    
  }

	
}
