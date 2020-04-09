import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagementComponent } from './task-management.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskActionsComponent } from './task-actions/task-actions.component';
const taskRoutes: Routes =[
	{
		path: '',
		component: TaskManagementComponent
	},
	{
		path: 'task-actions',
		component: TaskActionsComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoutes)
  ],
  declarations: [TaskManagementComponent, TaskActionsComponent]
})
export class TaskManagementModule { }
