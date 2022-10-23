import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})

export class ViewBlogComponent implements OnInit {
  public readonly path = "Blogs";
  public blog_list: any;

  constructor(private _blogService: BlogService) {
    this.getAllBlog();
  }

  ngOnInit(): void {
  }

  getAllBlog() {
    this._blogService.getAllData(this.path).subscribe((data: any) => {
      this.blog_list = data;
      console.log("this.bloglist", this.blog_list)
    })
  }

}
