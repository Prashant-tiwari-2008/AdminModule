import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  { path: "", component: ViewBlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
