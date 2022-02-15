import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {

  public nameEtat: string = "Recherche idée projet"
  public etatTache: string = "afaire"

  constructor() {
    console.log("New tache")
   }

  ngOnInit(): void {
  }

  getEtat(): string{
    switch (this.etatTache){
      case "a faire": return "à faire"
      case "encours": return "en cours"
      case "termine": return "terminée"
      default : return "indeterminé"
    }
  }

}
