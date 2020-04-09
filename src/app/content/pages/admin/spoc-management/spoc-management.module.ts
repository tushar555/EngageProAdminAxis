import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpocManagementComponent } from './spoc-management.component';
import { RouterModule, Routes } from '@angular/router';
import { SpocActionsComponent } from './spoc-actions/spoc-actions.component';

const spocRoutes: Routes =[
  {
    path: '',
    component: SpocManagementComponent
  },

  {
    path: 'spoc-actions',
    component: SpocActionsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(spocRoutes)
  ],
  declarations: [SpocManagementComponent, SpocActionsComponent]
})
export class SpocManagementModule { }
