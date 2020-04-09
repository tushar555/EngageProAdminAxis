
import {BaseAdminComponent} from '../BaseAdminComponent';
import {MasterPageObservableService} from '../../../../core/services/layout/master-page-observable.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import * as faker from "faker";
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Router, ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../../../../core/services/spinner/spinner.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

const batchSize =10;

@Component({
  selector: 'm-experts-management',
  templateUrl: './experts-management.component.html',
  styleUrls: ['./experts-management.component.scss']
})
export class ExpertsManagementComponent extends BaseAdminComponent {
  
  @ViewChild(CdkVirtualScrollViewport) viewPort:CdkVirtualScrollViewport;

  index = new Subject();
  changeExpertList = new BehaviorSubject({});
  dummyExpertList:any[];
  id: number=0;
  expertList: any[];
  dataSource: any ;
  animal: any;
  name: any;
  
  constructor(public spinner:SpinnerService,public observable: MasterPageObservableService, public route:Router, private activateRoute: ActivatedRoute) { 
    super(observable);
		this.observable.actionSubject.next({type: 'add-action', payload: {'title':'Add Experts','path':'/home/experts/expert-actions', 'showAddBtn':true}})
   

    this.expertList =  Array(30).fill(1).map(()=>{
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        number: faker.phone.phoneNumber(),
        email: faker.internet.email()
      }
    });


    this.changeExpertList.next(this.expertList);
    this.changeExpertList.subscribe((array)=>{
      this.dataSource = array;  
    })

    this.dummyExpertList =  Array(30).fill(1).map(()=>{
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        number: faker.phone.phoneNumber(),
        email: faker.internet.email()
       
      }
    });               
  
  
    this.index.subscribe((obj)=>{
    
       this.getBatch(obj,1)
   })
    
    
  }



  

  onAction(type: string, payload: string | any) {
   // this.route.navigate([payload.path])
	}

  addAction(){
   // this.observable.actionSubject.next({type: '', payload: {'path':'/home/experts/expert-actions', "showAddBtn":true}})
    //this.route.navigate(['/home/experts/expert-actions'])
  }

  editAction(obj){
    this.observable.dataFromParent = obj;
    this.route.navigate(['/home/experts/expert-actions']);
  }

  deleteAction(obj,index){
    // this.changeExpertList.subscribe((array:any[])=>{
    
    //   array.splice(array.findIndex(innerObj =>innerObj.email === obj.email ),1);
    //   this.changeExpertList.next(array);
    //   console.log("ARRAY", array);
    // })
  }

  getBatch(obj,p){      
 
     if(obj.flag !== undefined ){
    
         setTimeout(()=>{
          this.changeExpertList.next(this.expertList.concat(this.dummyExpertList))  
         
         }, 2000)
     
     }
   
    }

  //    let intialIndex = n;
  //  // alert('g'+intialIndex);
  //    let lastIndex = ((n+batchSize)>this.people.length)?this.people.length:n+batchSize ;
  //    console.log('intialIndex', intialIndex, 'lastIndex', lastIndex);
     
  //    return this.people.slice(intialIndex, lastIndex); 
  makeNewRequest(e){
   
    const scrollingTo = this.viewPort.getRenderedRange().end;
    const total = this.viewPort.getDataLength();
    let flag = ''
 
    if(scrollingTo === total){
  
      this.index.next({"index":scrollingTo,"flag":'last'});
    }  


  }

  trackByIdx(i){
    return i;
  }

  getIndex(ev){
    console.log('Hello',ev );
    
  }
  
 

  ngOnInit() {
  
    
  }


  

}


