import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMemberPageRoutingModule } from './profile-member-routing.module';

import { ProfileMemberPage } from './profile-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMemberPageRoutingModule
  ],
  declarations: [ProfileMemberPage]
})
export class ProfileMemberPageModule {}
