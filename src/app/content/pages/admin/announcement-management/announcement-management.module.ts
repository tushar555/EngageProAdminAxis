
import { ErrorPageComponent } from './../../snippets/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementManagementComponent } from './announcement-management.component';
import { RouterModule, Routes } from '@angular/router';
import { AnnoucementActionsComponent } from './annoucement-actions/annoucement-actions.component';
import { NgxEditorModule } from 'ngx-editor';
import { MatFormFieldModule, MatDatepickerModule,
         MatNativeDateModule, MatInputModule, 
         MatCheckboxModule } from '@angular/material';


const annoncementRoutes: Routes = [

	{
    path: '',
    component: AnnouncementManagementComponent,
  },
  {
    path: 'announcement-actions',
    component: AnnoucementActionsComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(annoncementRoutes),
    NgxEditorModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatInputModule,
    MatCheckboxModule,
  
  
  ],
  exports:[RouterModule],
  declarations: [AnnouncementManagementComponent, AnnoucementActionsComponent],

})
export class AnnouncementManagementModule { }
