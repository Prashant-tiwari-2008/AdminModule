import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: any;
  constructor(private _blogService: BlogService) {
  }

  ngOnInit(): void {
  }

  deleteProject(key: string) {
    this._blogService.remove('Projects', key)
  }

}
