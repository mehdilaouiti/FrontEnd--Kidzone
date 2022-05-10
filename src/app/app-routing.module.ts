import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReclamationComponent } from './create-reclamation/create-reclamation.component';
import { CreateRendezVousComponent } from './create-rendez-vous/create-rendez-vous.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { RendezVousListComponent } from './rendez-vous-list/rendez-vous-list.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';
import { UpdateRendezVousComponent } from './update-rendez-vous/update-rendez-vous.component';


const routes: Routes = [

  
  {path: 'rendez-vous', component: RendezVousListComponent },
  {path: '', redirectTo: 'rendez-vous', pathMatch: 'full'},
  { path: 'create-Meeting', component: CreateRendezVousComponent },
  { path: 'update-meeting/:id', component: UpdateRendezVousComponent },
  {path: 'reclamation', component: ReclamationListComponent },
  {path: '', redirectTo: 'reclamation', pathMatch: 'full'},
  { path: 'create-eclamation', component: CreateReclamationComponent },
  { path: 'update-reclamation/:id', component: UpdateReclamationComponent },









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
