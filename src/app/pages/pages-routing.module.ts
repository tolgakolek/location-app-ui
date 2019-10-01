import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/dashboards/dashboard-1', pathMatch: 'full'},
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'campus', loadChildren: () => import('./Campus/campus.module').then(m => m.AddCampusModule) },
  { path: 'build', loadChildren: () => import('./Build/build.module').then(m => m.AddBuildModule) },
  { path: 'block', loadChildren: () => import('./block/block.module').then(m => m.BlockModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'site', loadChildren: () => import('./site/site.module').then(m => m.SiteModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
