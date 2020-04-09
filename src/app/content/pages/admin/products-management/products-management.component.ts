import { Component, OnInit } from '@angular/core';
import {BaseAdminComponent} from '../BaseAdminComponent';
import {MasterPageObservableService} from '../../../../core/services/layout/master-page-observable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'm-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.scss']
})
export class ProductsManagementComponent extends BaseAdminComponent {

	onAction(type: string, payload: string | any) {
		//this.route.navigate([payload.path])
		}

	constructor(public observable: MasterPageObservableService, public route:Router){
		super(observable);
		this.observable.actionSubject.next({type: '', payload: {'title':'Add Product','path':'/home/product/tree-actions', 'showAddBtn':true}})
	}
}
