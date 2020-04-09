import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  CalenderActionsComponent } from './calender-actions/calender-actions.component';
import { CalenderComponent } from './calender.component'
const calenderRoutes: Routes = [

	{
    path: '',
    component: CalenderComponent,
  },
  {
    path: 'calender-actions',
    component: CalenderActionsComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(calenderRoutes)
  ],
  exports:[RouterModule],
  declarations: [CalenderComponent, CalenderActionsComponent]
})
export class CalenderModule { }
