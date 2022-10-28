import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildPCPage } from './build-pc.page';

const routes: Routes = [
  {
    path: '',
    component: BuildPCPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildPCPageRoutingModule {}
