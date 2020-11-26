import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileMemberPage } from './profile-member.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileMemberPageRoutingModule {}
