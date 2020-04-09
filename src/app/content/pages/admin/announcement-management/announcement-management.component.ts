import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '../../../../core/services/spinner/spinner.service';
import {BaseAdminComponent} from '../BaseAdminComponent';
import {MasterPageObservableService} from '../../../../core/services/layout/master-page-observable.service';

@Component({
  selector: 'm-announcement-management',
  templateUrl: './announcement-management.component.html',
  styleUrls: ['./announcement-management.component.scss']
})
export class AnnouncementManagementComponent extends BaseAdminComponent {

  constructor(public route: Router, private spinnerSerive: SpinnerService, private observable: MasterPageObservableService) {
    super(observable);
		this.observable.actionSubject.next({type: '', payload: {'title':'Add Announcement','path':'/home/announcement/announcement-actions', 'showAddBtn':true}})
    
  }

  ngOnInit() {
    super.ngOnInit()
    
    // this.spinnerSerive.showSpinner();
    // setTimeout(()=>{
    //   this.spinnerSerive.hideSpinner();
    // },500 )
    
  }

  gotoActions(){
    
    
   //this.route.navigate(["annoucement/annoucement-actions"]) 
  }

  onAction(type: string, payload: string | any) {
    //this.route.navigate([payload.path])
	}

  ngAfterViewInit(){
	
	}

}
