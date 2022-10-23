import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  private readonly path = "skills"
  public skillId: any;
  public skillList: any;

  constructor(private _BlogService: BlogService, private spinner: NgxSpinnerService) {
    this.getAllSkill();
  }

  ngOnInit(): void {
  }

  getAllSkill() {
    this.spinner.show();
    this._BlogService.getAllData(this.path).subscribe((res: any) => {
      this.skillList = res;
      this.spinner.hide();
    })
  }
  editSkills(key: string): void {
    this.skillId = this.skillList.find((skill: any) => skill.key === key)
  }

  deleteSkills(key: string): void {
    this._BlogService.remove(this.path, key)
  }
}