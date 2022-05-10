import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultationComponent } from './consultation/consultation.component';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { NgxQRCodeModule } from 'ngx-qrcode2';


import { ForumListComponent } from './forum-list/forum-list.component';
import { CreateForumComponent } from './create-forum/create-forum.component';
import { ForumService } from './forum.service';
import { UpdateForumComponent } from './update-forum/update-forum.component';
import { SujetsListComponent } from './sujets-list/sujets-list.component';
import { UpdateSujetComponent } from './update-sujet/update-sujet.component';
import { CreateSujetComponent } from './create-sujet/create-sujet.component';
import { ReponseListComponent } from './reponse-list/reponse-list.component';
import { NgToastModule } from 'ng-angular-popup';
import { CreateReponseComponent } from './create-reponse/create-reponse.component';
import { ListForumFComponent } from './list-forum-f/list-forum-f.component';
import { ListSujetFComponent } from './list-sujet-f/list-sujet-f.component';
import { ListReponseFComponent } from './list-reponse-f/list-reponse-f.component';
import { CreateSujetFComponent } from './create-sujet-f/create-sujet-f.component';
import { CreateReponseFComponent } from './create-reponse-f/create-reponse-f.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';

import { PublicationListFComponent } from './publication-list-f/publication-list-f.component';
import { PostComponent } from './post/post.component';

import {GoogleChartsModule} from "angular-google-charts";
import { StatComponent } from './stat/stat.component';

import {WebcamModule} from 'ngx-webcam';
import { MypubsComponent } from './mypubs/mypubs.component';
import { UpdatePubComponent } from './update-pub/update-pub.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    ConsultationComponent,
    ForumListComponent,
    CreateForumComponent,
    UpdateForumComponent,
    SujetsListComponent,
    UpdateSujetComponent,
    CreateSujetComponent,
    ReponseListComponent,
    CreateReponseComponent,
    ListForumFComponent,
    ListSujetFComponent,
    ListReponseFComponent,
    CreateSujetFComponent,
    CreateReponseFComponent,
    PublicationListComponent,
    CreatePublicationComponent,
    PublicationListFComponent,
    PostComponent,
    StatComponent,
    MypubsComponent,
    UpdatePubComponent,
  
    


    /*CategorieProduitComponent,
    ProduitComponent,
    FormProduitComponent,
    FormCategorieproduitComponent,
    FormReclamationComponent,
    FormReponsereclamationComponent,
    StatReclamationComponent,
    ReclamationComponent,
    ReponseReclamationComponent,*/
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
    NgbModule,
    SocialLoginModule,
    NgToastModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxQRCodeModule,
    WebcamModule,


  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('150572716395-ji0e8rnqu0oc02ichrjgl8b6j4i6p743.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
