import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'match',
    loadChildren: () => import('./pages/match/match.module').then( m => m.MatchPageModule)
  },
  {
    path: 'meetings',
    loadChildren: () => import('./pages/meetings/meetings.module').then( m => m.MeetingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
