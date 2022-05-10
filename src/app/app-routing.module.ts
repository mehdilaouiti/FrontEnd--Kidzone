import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateForumComponent } from './create-forum/create-forum.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { CreateReponseFComponent } from './create-reponse-f/create-reponse-f.component';
import { CreateReponseComponent } from './create-reponse/create-reponse.component';
import { CreateSujetFComponent } from './create-sujet-f/create-sujet-f.component';
import { CreateSujetComponent } from './create-sujet/create-sujet.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { ForumService } from './forum.service';
import { ListForumFComponent } from './list-forum-f/list-forum-f.component';
import { ListReponseFComponent } from './list-reponse-f/list-reponse-f.component';
import { ListSujetFComponent } from './list-sujet-f/list-sujet-f.component';
import { MypubsComponent } from './mypubs/mypubs.component';
import { PostComponent } from './post/post.component';
import { PublicationListFComponent } from './publication-list-f/publication-list-f.component';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { ReponseListComponent } from './reponse-list/reponse-list.component';
import { StatComponent } from './stat/stat.component';
import { SujetsListComponent } from './sujets-list/sujets-list.component';
import { UpdateForumComponent } from './update-forum/update-forum.component';
import { UpdatePubComponent } from './update-pub/update-pub.component';


const routes: Routes = [



  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'consultation', loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationModule) },
{path: 'forums', component: ForumListComponent},
  {path: 'stat', component: StatComponent},
  {path: 'pubs', component: PublicationListComponent},
  {path: 'pubsF', component: PublicationListFComponent},
  {path: 'mypubs', component: MypubsComponent},
  {path: 'forumsF', component: ListForumFComponent},
  {path: 'sujets/:id', component: SujetsListComponent},
  {path: 'sujetsF/:id', component: ListSujetFComponent},
  {path: 'reponsesF/:id', component: ListReponseFComponent},
  {path: 'create-Forum',component:CreateForumComponent},
  {path: 'create-Pub',component:CreatePublicationComponent},
  {path: 'create-sujet/:id',component:CreateSujetComponent},
  {path: 'create-sujet-f/:id',component:CreateSujetFComponent},
  {path: 'create-reponse-f/:id',component:CreateReponseFComponent},
  {path: 'create-reponse/:id',component:CreateReponseComponent},
  {path: '', redirectTo: 'forums', pathMatch: 'full'},
 
  {path: 'update-forum/:id', component: UpdateForumComponent},
  {path: 'update-pub/:id', component: UpdatePubComponent},
  {path: 'seepost/:id', component: PostComponent},
  {path: 'update-sujet/:id', component: SujetsListComponent},

  {path: 'reponses/:id', component: ReponseListComponent},









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
