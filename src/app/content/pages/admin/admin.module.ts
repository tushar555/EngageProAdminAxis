import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PartialsModule } from '../../partials/partials.module';
import { ListTimelineModule } from '../../partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { WidgetChartsModule } from '../../partials/content/widgets/charts/widget-charts.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
		PartialsModule,
		ListTimelineModule,
		WidgetChartsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
  ]
})
export class AdminModule { }
