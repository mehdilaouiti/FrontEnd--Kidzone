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
import { EvenementComponent } from './evenement/evenement.component';
import { AddEvenementComponent } from './evenement/add-evenement/add-evenement.component';
import { NavbarBackComponent } from './navbar-back/navbar-back.component';
import { UpdateEvenementComponent } from './evenement/update-evenement/update-evenement.component';
import { EvenementDetailsComponent } from './evenement/evenement-details/evenement-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgPipesModule } from 'ngx-pipes';
import { NgxPaginationModule } from 'ngx-pagination';
import { JardinComponent } from './jardin/jardin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    ConsultationComponent,
    EvenementComponent,
    AddEvenementComponent,
    NavbarBackComponent,
    UpdateEvenementComponent,
    EvenementDetailsComponent,
    JardinComponent

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
    FormsModule,
    Ng2SearchPipeModule,
    NgPipesModule,
    Ng2OrderModule,
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
