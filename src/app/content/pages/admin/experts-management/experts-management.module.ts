import { DataSource } from '@angular/cdk/collections';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertsManagementComponent } from './experts-management.component';
import { RouterModule, Routes } from '@angular/router';
import { ExpertsActionsComponent } from './experts-actions/experts-actions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatTableModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { MasterPageObservableService } from '../../../../core/services/layout/master-page-observable.service';

const expertsRoutes: Routes = [

	{
    path: '',
    component: ExpertsManagementComponent,
  },
  {
    path: 'expert-actions',
    component: ExpertsActionsComponent,
    resolve:{
      data:MasterPageObservableService
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(expertsRoutes),
    ScrollingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    
  ],
  exports:[RouterModule],
  declarations: [ExpertsManagementComponent, ExpertsActionsComponent]
})
export class ExpertsManagementModule { }
