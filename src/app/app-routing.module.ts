import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { TacheListComponent } from './tache-list/tache-list.component';

const routes: Routes = [
  { path: 'taches', component: TacheListComponent },
  { path: 'connexion', component: ConnexionComponent},
  { path: '', component: AccueilComponent},
  { path: 'erreur404', component: Erreur404Component},
  { path: '**', redirectTo: 'erreur'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
