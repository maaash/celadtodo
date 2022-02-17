import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { TacheListComponent } from './tache-list/tache-list.component';
import { TacheViewComponent } from './tache-view/tache-view.component';
import { ConnexionGuardService } from './services/connexion-guard.service';
import { TacheEditComponent } from './tache-edit/tache-edit.component';

const routes: Routes = [
  { path: 'taches', component: TacheListComponent, canActivate:[ConnexionGuardService] },
  { path: 'connexion', component: ConnexionComponent},
  { path: '', component: AccueilComponent},
  { path: 'tache/new', component: TacheEditComponent},
  { path: 'tache/:id', component: TacheViewComponent, canActivate:[ConnexionGuardService]},
  { path: 'erreur404', component: Erreur404Component},
  { path: '**', redirectTo: 'erreur404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
