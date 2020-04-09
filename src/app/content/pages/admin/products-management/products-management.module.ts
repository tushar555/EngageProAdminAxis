import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsManagementComponent } from './products-management.component';
import { RouterModule, Routes } from '@angular/router';
import { TreeActionsComponent } from './tree-actions/tree-actions.component';
import { ListActionsComponent } from './list-actions/list-actions.component';

const productRoutes: Routes = [
	{
		path: '',
		component: ProductsManagementComponent
	},
	{
		path: 'tree-actions',
		component: TreeActionsComponent
	},

	{
		path: 'list-actions',
		component: ListActionsComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [ProductsManagementComponent, TreeActionsComponent, ListActionsComponent]
})
export class ProductsManagementModule { }
