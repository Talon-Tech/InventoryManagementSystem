import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddOrgComponent } from './components/add-org/add-org.component';
import { ViewOrgComponent } from './components/view-org/view-org.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddOrgComponent
  },
  {
    path: 'view',
    component: ViewOrgComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
