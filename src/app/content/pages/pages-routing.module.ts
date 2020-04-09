import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ActionComponent } from './header/action/action.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ProfileComponent } from './header/profile/profile.component';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { InnerComponent } from "./components/inner/inner.component";
import { AuthGuard	} from '../../core/authguard/auth.guard';
const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		// Remove comment to enable login
		 canActivate: [AuthGuard],
		data: {
			permissions: {
				only: ['ADMIN', 'USER'],
				except: ['GUEST'],
				redirectTo: '/login'
			}
		},
		children: [
			{
				path: '',
				canActivateChild:[AuthGuard],
				loadChildren: './admin/admin.module#AdminModule'
			},
			{
				path: 'builder',
				canActivateChild:[AuthGuard],
				loadChildren: './builder/builder.module#BuilderModule'
			},
			{
				path: 'header/actions',
				canActivateChild:[AuthGuard],
				component: ActionComponent
			},
			{
				path: 'profile',
				canActivateChild:[AuthGuard],

				component: ProfileComponent
			},
			{
				path: 'inner',
				canActivateChild:[AuthGuard],
				component: InnerComponent
			},
		]
	},
	{
		path: '404',
		component: ErrorPageComponent
	},
	{
		path: 'error/:type',
		component: ErrorPageComponent
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch :'full'
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}
