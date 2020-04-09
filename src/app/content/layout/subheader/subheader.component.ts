import { Component, OnInit, Input, ChangeDetectionStrategy, NgZone, AfterViewInit } from '@angular/core';
import { SubheaderService } from '../../../core/services/layout/subheader.service';
import {MasterPageObservableService} from '../../../core/services/layout/master-page-observable.service';
import {ActionCommand} from '../../../core/models/action-command';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'm-subheader',
	templateUrl: './subheader.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubheaderComponent implements OnInit, AfterViewInit {
	payload: any={};
	showAddBtn: any;
	//actionService: MasterPageObservableService;
	constructor( private route:Router, public subheaderService: SubheaderService,private actionService: MasterPageObservableService, private zone:NgZone) {
		//this.actionService = actionService;
	//	actionService.showAdd  =true

		this.actionService.actionSubject.subscribe((obj)=>{

			this.zone.run(()=>{
				this.payload = obj.payload; 
				//this.showAddBtn = !obj.payload ? false :obj.payload.showAddBtn ;
				
			})
		
		})

		if(!this.showAddBtn){
			this.showAddBtn = !this.route.url.includes('actions')
		}
	
	}

	ngAfterViewInit(){
		
	//	const result = this.actionService.showAdd
		//console.log('View ',result );

	}

	

	ngOnInit(): void {}

	publishAddAction() {
		
		this.route.navigate([this.payload.path])
		// if( this.payload.dependent_page.length !== 0){	
			
		// 	this.actionService.actionSubject.next({type: 'add-action', payload:{"data":this.payload, "path":this.payload.dependent_page[0], "showAddBtn":false} });
		// }
	}
}
