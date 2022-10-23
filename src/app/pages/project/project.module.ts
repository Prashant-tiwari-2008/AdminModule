import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ViewProjectComponent } from './view-project/view-project.component';
import { HelperModule } from 'src/app/helper/helper.module';
// import { ProjectCardComponent } from 'src/app/helper/project-card/project-card.component';


@NgModule({
  declarations: [
    ViewProjectComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    HelperModule
  ]
})
export class ProjectModule { }
