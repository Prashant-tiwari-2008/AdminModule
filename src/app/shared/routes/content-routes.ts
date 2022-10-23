import { Routes } from "@angular/router";

export const contentRoutes: Routes = [
    { path: 'dashboard', loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'project', loadChildren: () => import('../../pages/project/project.module').then(m => m.ProjectModule) },
    { path: 'blog', loadChildren: () => import('../../pages/blog/blog.module').then(m => m.BlogModule) },
    { path: 'skill', loadChildren: () => import('../../pages/skill/skill.module').then(m => m.SkillModule) },
    { path: 'review', loadChildren: () => import('../../pages/review/review.module').then(m => m.ReviewModule) },
    { path: 'report', loadChildren: () => import('../../pages/report/report.module').then(m => m.ReportModule) },
    { path: 'profile', loadChildren: () => import('../../pages/profile/profile.module').then(m => m.ProfileModule) },
]