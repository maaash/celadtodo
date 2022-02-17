import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TacheComponent } from './tache/tache.component';
import { TacheListComponent } from './tache-list/tache-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { TacheViewComponent } from './tache-view/tache-view.component';
import { TacheEditComponent } from './tache-edit/tache-edit.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { UtilisateurEditComponent } from './utilisateur-edit/utilisateur-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TacheComponent,
    TacheListComponent,
    AccueilComponent,
    ConnexionComponent,
    Erreur404Component,
    TacheViewComponent,
    TacheEditComponent,
    UtilisateurListComponent,
    UtilisateurEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
