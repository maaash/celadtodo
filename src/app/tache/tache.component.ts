import { Component, Input, OnInit } from '@angular/core';
import { Etat, Tache, tacheDefaut } from '../models/tache';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {

  public etat = Etat

  @Input("nom") public nameTache: string = tacheDefaut.nom
  @Input("etat") public etatTache: Etat = tacheDefaut.etat
  @Input('id') public idTache: number = tacheDefaut.id


  constructor( private tacheService: TacheService ) {

   }

  ngOnInit(): void {
  }

  getNom(): string{
    return this.nameTache
  }

  getEtat(): string{
    return this.etatTache
  }


  getCouleurEtat(): string{
    switch (this.etatTache){
      case Etat.AFAIRE: return "orange"
      case Etat.ENCOURS: return "darkblue"
      case Etat.TERMINEE: return "darkgreen"
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
