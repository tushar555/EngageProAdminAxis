import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { expertFormModels } from '../../../../../core/models/form-model';
import { Router, ActivatedRoute} from '@angular/router';
import { MasterPageObservableService } from '../../../../../core/services/layout/master-page-observable.service';

@Component({
  selector: 'm-experts-actions',
  templateUrl: './experts-actions.component.html',
  styleUrls: ['./experts-actions.component.scss']
})
export class ExpertsActionsComponent implements OnInit {
  expertForm:any;
  expertData: any;
  constructor(public router:ActivatedRoute,public observable: MasterPageObservableService,public formbuilder:FormBuilder, private route:Router) { 
  
    this.observable.actionSubject.next({type: '', payload: {'showAddBtn':false}})
    this.router.data.subscribe((obj) => {
 
      this.expertData = obj.data.mainData
    });
  }
  

  ngOnInit() {
    this.expertForm = this.createExpertForm();
  }
  createExpertForm(){
    return this.formbuilder.group({
      expertdata: this.formbuilder.group(expertFormModels)
    })
  }

  onCancel(){
    this.route.navigate(["/home/experts"])
  }

  onSubmit(){
   
  }
}
