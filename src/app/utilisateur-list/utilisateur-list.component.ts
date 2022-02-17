import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from '../services/utilisateurs.service';
import { Utilisateurs } from '../models/utilisateurs';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.scss']
})
export class UtilisateurListComponent implements OnInit {

  public utilisateurs : Utilisateurs[] = []

  constructor( private us: UtilisateursService) {

   }

  ngOnInit(): void {
    this.utilisateurs = this.us.getUsers()
  }

  onSauvegarde(): void{
    this.us.sauvegardeServeur()
  }

  onRestauration(): void{
    this.us.restaurationServeur()
  }

}
