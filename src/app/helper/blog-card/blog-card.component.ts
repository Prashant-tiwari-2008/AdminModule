import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  path = "Blogs"
  @Input() blog: any;

  constructor(private _blogService: BlogService) { }
  ngOnInit(): void {
  }

  removeBlog(key: string) {
    this._blogService.remove(this.path, key)
  }
}
