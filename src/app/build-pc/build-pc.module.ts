import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuildPCPageRoutingModule } from './build-pc-routing.module';

import { BuildPCPage } from './build-pc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuildPCPageRoutingModule
  ],
  declarations: [BuildPCPage]
})
export class BuildPCPageModule {}
