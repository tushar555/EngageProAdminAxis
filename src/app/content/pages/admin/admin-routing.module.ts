import { AuthGuard } from './../../../core/authguard/auth.guard';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const Adminroutes: Routes = [

	{
		path: '',
		component: AdminComponent,
		canActivate: [AuthGuard],
		
	},	
	{
		path: 'announcement',
		canActivateChild: [AuthGuard],
		loadChildren: './announcement-management/announcement-management.module#AnnouncementManagementModule',
		
	},
	{
		path: 'calender',
		canActivateChild: [AuthGuard],
		loadChildren: './calender/calender.module#CalenderModule'
	},

	{
		path: 'experts',
		canActivateChild: [AuthGuard],
		loadChildren: './experts-management/experts-management.module#ExpertsManagementModule'
	},

	{
		path: 'mis',
		canActivateChild: [AuthGuard],
		loadChildren: './mis-management/mis-management.module#MisManagementModule'
	},

	{
		path: 'module',
		canActivateChild: [AuthGuard],
		loadChildren: './module-management/module-management.module#ModuleManagementModule'
	},

	{
		path: 'products',
		canActivateChild: [AuthGuard],
		loadChildren: './products-management/products-management.module#ProductsManagementModule'
	},

	{
		path: 'spoc',
		canActivateChild: [AuthGuard],
		loadChildren: './spoc-management/spoc-management.module#SpocManagementModule'
	},

	{
		path: 'task',
		loadChildren: './task-management/task-management.module#TaskManagementModule'
	},
	{
		path: '**',
		redirectTo: "404",
		pathMatch: "full"
	}

];

@NgModule({
	imports: [RouterModule.forChild(Adminroutes)],
	exports: [RouterModule]
})
export class AdminRoutingModule {}
