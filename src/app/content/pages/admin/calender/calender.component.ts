import { Component, OnInit } from '@angular/core';
import {BaseAdminComponent} from '../BaseAdminComponent';
import {MasterPageObservableService} from '../../../../core/services/layout/master-page-observable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'm-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent extends BaseAdminComponent {
	constructor(public observable: MasterPageObservableService, private route: Router){
		super(observable);
	
		this.observable.actionSubject.next({type: '', payload: {'title':'Add task','path':'/home/calender/calender-actions', 'showAddBtn':true}})
	}
	onAction(type: string, payload: string | any) {
		//this.route.navigate([payload.path])
		}
	
	

}
