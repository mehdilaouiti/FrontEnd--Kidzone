import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEvenementComponent } from './evenement/add-evenement/add-evenement.component';
import { EvenementDetailsComponent } from './evenement/evenement-details/evenement-details.component';
import { EvenementComponent } from './evenement/evenement.component';
import { UpdateEvenementComponent } from './evenement/update-evenement/update-evenement.component';


const routes: Routes = [

  {path: 'Addevenements', component : AddEvenementComponent},
  { path: 'evenements', component: EvenementComponent  },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'consultation', loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationModule) },
  { path: 'update-evenement/:id', component: UpdateEvenementComponent},
  { path: 'evenement-details/:id', component: EvenementDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
