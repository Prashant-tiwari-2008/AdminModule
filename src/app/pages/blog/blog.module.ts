import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { HelperModule } from 'src/app/helper/helper.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    ViewBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HelperModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class BlogModule { }
