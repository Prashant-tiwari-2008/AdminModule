import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillRoutingModule } from './skill-routing.module';
import { SkillComponent } from './skill.component';
import { HelperModule } from 'src/app/helper/helper.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    SkillComponent
  ],
  imports: [
    CommonModule,
    SkillRoutingModule,
    HelperModule,
    NgxSpinnerModule
  ]
})
export class SkillModule { }
