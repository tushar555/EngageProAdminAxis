import { Component, OnInit } from '@angular/core';
import {BaseAdminComponent} from '../BaseAdminComponent';
import {MasterPageObservableService} from '../../../../core/services/layout/master-page-observable.service';
import { Router } from '@angular/router';



@Component({
  selector: 'm-mis-management',
  templateUrl: './mis-management.component.html',
  styleUrls: ['./mis-management.component.scss']
})
export class MisManagementComponent extends BaseAdminComponent{

	
	constructor(public observable: MasterPageObservableService, public route:Router){
		super(observable);
		this.observable.actionSubject.next({type: '', payload: {'title':'','path':'', 'showAddBtn':false}})
		
	}

	onAction(type: string, payload: string | any) {

		}

		
	
	
}
