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
import { EnfantComponent } from './enfant/enfant.component';
import { AddEnfantComponent } from './enfant/add-enfant/add-enfant.component';
import { NavbarBackComponent } from './navbar-back/navbar-back.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateEnfantComponent } from './enfant/update-enfant/update-enfant.component';
import { SearchPipe } from './enfant/search.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule} from 'ngx-pagination';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';
import {NgPipesModule} from 'ngx-pipes';
import { DetailsEnfantComponent } from './enfant/details-enfant/details-enfant.component';
import { NgToastModule } from 'ng-angular-popup'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    ConsultationComponent,
    EnfantComponent,
    AddEnfantComponent,
    NavbarBackComponent,
    UpdateEnfantComponent,
    SearchPipe,
    DetailsEnfantComponent,


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
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatSortModule,
    MatPaginatorModule,
    WavesModule, TableModule, IconsModule,
    NgPipesModule,
    NgToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
