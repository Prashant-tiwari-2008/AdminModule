import { Component, OnInit } from '@angular/core';

interface ISidebarMenu {
  name: string,
  IconClass: string,
  routeTo: string
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public isSidebarClose = false;
  public sidebarMenu: ISidebarMenu[] = [
    { name: "Dashboard", IconClass: "icofont-home", routeTo: "dashboard" },
    { name: "Projects", IconClass: "icofont-briefcase", routeTo: "project" },
    { name: "Blog", IconClass: "icofont-code-alt", routeTo: "blog" },
    { name: "Skill", IconClass: "icofont-brainstorming", routeTo: "skill" },
    { name: "review", IconClass: "icofont-users-alt-5", routeTo: "review" },
    { name: "report", IconClass: "icofont-license", routeTo: "report" },
    { name: "profile", IconClass: "icofont-user-male", routeTo: "profile" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isSidebarClose = !this.isSidebarClose;
  }

  toggleDarkMode() {
    // TODO: need to write better method
    if ('data-theme' in document.getElementById('html')?.attributes!) {
      document.getElementById('html')?.removeAttribute('data-theme')
    } else {
      document.getElementById('html')!.setAttribute('data-theme', 'dark')
    }
  }
}