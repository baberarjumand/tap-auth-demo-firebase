import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishSignInPageRoutingModule } from './finish-sign-in-routing.module';

import { FinishSignInPage } from './finish-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishSignInPageRoutingModule
  ],
  declarations: [FinishSignInPage]
})
export class FinishSignInPageModule {}
