import { Injectable, AfterViewInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import {ActionCommand} from '../../models/action-command';
import { Resolve } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class MasterPageObservableService  implements Resolve<any> {
	
//	actionSubject: Subject<ActionCommand>;
actionSubject: Subject<ActionCommand>
	valuesObservable: Subject<string>;
	showAdd = undefined
	dataFromParent:any;

	constructor() {
		this.actionSubject = new Subject<ActionCommand>();
		this.valuesObservable = new Subject();	
		// this.valuesObservable.subscribe((obj)=>{
		// 	console.log('SubSCRIBE',obj);
		// 	this.dataFromParent=obj
		// })
	}
	resolve(): Promise<any> |any{
		return {mainData:this.dataFromParent}
	}
}