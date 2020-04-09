import { Component, OnInit } from '@angular/core';
import {BaseAdminComponent} from '../BaseAdminComponent';
import {MasterPageObservableService} from '../../../../core/services/layout/master-page-observable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'm-module-management',
  templateUrl: './module-management.component.html',
  styleUrls: ['./module-management.component.scss']
})
export class ModuleManagementComponent extends BaseAdminComponent {
	onAction(type: string, payload: string | any) {
		//this.route.navigate([payload.path])
		}

	constructor(public observable: MasterPageObservableService, public route:Router){
		super(observable);
		this.observable.actionSubject.next({type: '', payload: {'title':'Add Module','path':'/home/module/module-actions', 'showAddBtn':true}})
		
	}


}
