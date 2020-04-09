import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BaseAdminComponent} from '../BaseAdminComponent';
import {MasterPageObservableService} from '../../../../core/services/layout/master-page-observable.service';

@Component({
  selector: 'm-spoc-management',
  templateUrl: './spoc-management.component.html',
  styleUrls: ['./spoc-management.component.scss']
})
export class SpocManagementComponent extends BaseAdminComponent{

	constructor(public observable: MasterPageObservableService,  public route:Router){
		super(observable);
		this.observable.actionSubject.next({type: '', payload: {'title':'Add SPOC Admin','path':'/home/spoc/spoc-actions', 'showAddBtn':true}})

	}

	onAction(type: string, payload: string | any) {
    //this.route.navigate([payload.path])
	}

}
