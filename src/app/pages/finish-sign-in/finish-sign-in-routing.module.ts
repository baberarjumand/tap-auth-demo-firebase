import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishSignInPage } from './finish-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: FinishSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishSignInPageRoutingModule {}
