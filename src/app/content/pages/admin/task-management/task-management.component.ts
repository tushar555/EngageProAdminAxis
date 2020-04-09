import { Component, OnInit } from '@angular/core';
import {BaseAdminComponent} from '../BaseAdminComponent';
import {MasterPageObservableService} from '../../../../core/services/layout/master-page-observable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'm-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss']
})
export class TaskManagementComponent extends BaseAdminComponent {
	onAction(type: string, payload: string | any) {
	//	this.route.navigate([payload.path])
		}
	constructor(public observable: MasterPageObservableService, private route: Router){
		super(observable);
		this.observable.actionSubject.next({type: '', payload: {'title':'Add Task','path':'/home/task/task-actions', 'showAddBtn':true}})

	}
}
