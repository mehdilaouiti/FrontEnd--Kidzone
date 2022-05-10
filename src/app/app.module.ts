import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {GoogleChartsModule} from "angular-google-charts";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultationComponent } from './consultation/consultation.component';
import { RendezVousListComponent } from './rendez-vous-list/rendez-vous-list.component';
import { CreateRendezVousComponent } from './create-rendez-vous/create-rendez-vous.component';
import { UpdateRendezVousComponent } from './update-rendez-vous/update-rendez-vous.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { CreateReclamationComponent } from './create-reclamation/create-reclamation.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    ConsultationComponent,
    RendezVousListComponent,
    CreateRendezVousComponent,
    UpdateRendezVousComponent,
    ReclamationListComponent,
    CreateReclamationComponent,
    UpdateReclamationComponent,
   


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
    Ng2SearchPipeModule,
    NgxPaginationModule,
    PdfViewerModule,
    
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
