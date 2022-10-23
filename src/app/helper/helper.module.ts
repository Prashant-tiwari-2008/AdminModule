import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperRoutingModule } from './helper-routing.module';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogModelComponent } from './blog-model/blog-model.component';
import { ProjectModelComponent } from './project-model/project-model.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddSkillModelComponent } from './add-skill-model/add-skill-model.component';


@NgModule({
  declarations: [
    ProjectCardComponent,
    BlogCardComponent,
    BlogModelComponent,
    ProjectModelComponent,
    AddSkillModelComponent
  ],
  imports: [
    CommonModule,
    HelperRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [
    ProjectCardComponent,
    BlogCardComponent,
    BlogModelComponent,
    ProjectModelComponent,
    AddSkillModelComponent
  ]
})
export class HelperModule { }
