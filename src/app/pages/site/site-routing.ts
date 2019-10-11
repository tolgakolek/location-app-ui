import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSiteComponent } from './add-site/add-site.component';
import { UpdateSiteComponent } from './update-site/update-site.component';
import { ListSiteComponent } from './list-site/list-site.component';


const routes: Routes = [
    {
        path: 'add', component: AddSiteComponent
    },
    {
        path: 'update/:id', component: UpdateSiteComponent
    },
    {
        path: 'list', component: ListSiteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule { }
