import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  private readonly path = "Projects";
  public project_list: any;
  constructor(private _blogService: BlogService) {
    this.getAllSkill();
  }

  ngOnInit(): void {
  }

  getAllSkill() {
    this._blogService.getAllData(this.path).subscribe((res: any) => {
      this.project_list = res;
      console.log(this.project_list, "project list")
    })
  }

}
