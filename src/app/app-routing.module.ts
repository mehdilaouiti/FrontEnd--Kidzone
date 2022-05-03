import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnfantComponent } from './enfant/add-enfant/add-enfant.component';
import { DetailsEnfantComponent } from './enfant/details-enfant/details-enfant.component';
import { EnfantComponent } from './enfant/enfant.component';
import { UpdateEnfantComponent } from './enfant/update-enfant/update-enfant.component';


const routes: Routes = [



  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'consultation', loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationModule) },
  {path: 'enfants',component: EnfantComponent},
  {path: 'AddEnfant',component: AddEnfantComponent},
  {path: '', redirectTo:'enfants',pathMatch:'full'},
  {path: 'update-enfant/:id',component: UpdateEnfantComponent},
  {path: 'enfant-detail/:id',component: DetailsEnfantComponent},









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
