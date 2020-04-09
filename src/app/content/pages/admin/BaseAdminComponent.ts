import {ComponentLifecycle} from '../components/ComponentLifecycle';
import {MasterPageObservableService} from '../../../core/services/layout/master-page-observable.service';
import {Subscription} from 'rxjs';
import {OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';

export abstract class BaseAdminComponent implements OnInit, OnDestroy {

	actionSubscription: Subscription
	valuesSubscription: Subscription
	
	 protected constructor(private observableService: MasterPageObservableService) {
		 this.actionSubscription = this.observableService.actionSubject.subscribe(value => {
			
			 this.onAction(value.type, value.payload);
		 });
		
	 }

	ngOnInit() {
		// this.valuesSubscription = this.service.valuesObservable.subscribe();
	}

	ngOnDestroy() {
		this.actionSubscription.unsubscribe();
		// this.valuesSubscription.unsubscribe();
	}
	abstract onAction(type: string, payload: string | any)
}
