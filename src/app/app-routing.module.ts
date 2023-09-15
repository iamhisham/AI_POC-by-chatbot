import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserSegmentCreateComponent } from './user-segment-create/user-segment-create.component';

const routes: Routes = [
  {
    path: 'usersegment',
    component: UserSegmentCreateComponent,
  },
  {
    path: '',
    redirectTo: 'usersegment',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
