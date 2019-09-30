import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/dashboards/dashboard-1', pathMatch: 'full'},
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'addCampus', loadChildren: () => import('./Campus/addCampus.module').then(m => m.AddCampusModule) },
  { path: 'addBuild', loadChildren: () => import('./Build/addBuild.module').then(m => m.AddBuildModule) },
  { path: 'add-block', loadChildren: () => import('./block/block.module').then(m => m.BlockModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
