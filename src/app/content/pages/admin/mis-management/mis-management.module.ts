import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisManagementComponent } from './mis-management.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
			{
				path: '',
				component: MisManagementComponent
			}
    ]),
    MatTableModule
  ],
  declarations: [MisManagementComponent]
})
export class MisManagementModule { }
