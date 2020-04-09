import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleManagementComponent } from './module-management.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleActionsComponent } from './module-actions/module-actions.component';

const moduleRoutes: Routes = [

	{
    path: '',
    component: ModuleManagementComponent,
  },
  {
    path: 'module-actions',
    component: ModuleActionsComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(moduleRoutes)
	],
	exports:[RouterModule],
  declarations: [ModuleManagementComponent, ModuleActionsComponent]
})
export class ModuleManagementModule { }
