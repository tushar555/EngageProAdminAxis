import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/authguard/auth.guard';
const routes: Routes = [
	
	{
		path: 'login',
		// canActivate: [NgxPermissionsGuard],
		loadChildren: './content/pages/auth/auth.module#AuthModule',
		data: {
			permissions: {
				except: 'ADMIN'
			}
		},
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch:'full'
	},
	{
		path: 'home',
		canActivateChild:[AuthGuard],
		loadChildren: './content/pages/pages.module#PagesModule'
	 },
	{
		path: '**',
		redirectTo: 'login',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
