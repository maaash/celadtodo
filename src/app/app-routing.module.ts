import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TacheListComponent } from './tache-list/tache-list.component';

const routes: Routes = [
  { path: 'taches', component: TacheListComponent },
  { path: '', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
