import { Component, Input, OnInit } from '@angular/core';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {


  @Input("nom") public nameTache: string = "Recherche idée projet"
  @Input("etat") public etatTache: string = "afaire"
  @Input('index') public idTache: number = 0


  constructor( private tacheService: TacheService ) {

   }

  ngOnInit(): void {
  }

  getNom(): string{
    return this.nameTache
  }

  getEtat(): string{
    switch (this.etatTache){
      case "afaire": return "à faire"
      case "encours": return "en cours"
      case "terminee": return "terminée"
      default : return "indeterminé"
    }
  }
  getCouleurEtat(): string{
    switch (this.etatTache){
      case "afaire": return "orange"
      case "encours": return "darkblue"
      case "terminee": return "darkgreen"
      default : return "white"
    }
  }



  onProgresser(): void {
    this.tacheService.progresserTache(this.idTache)
  }

  onRegresser(): void {
    this.tacheService.regresserTache(this.idTache)
  }

}
