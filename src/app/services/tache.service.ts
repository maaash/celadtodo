import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  public taches: any[] = [
    {nom: "Recherche idee projet",
    etat: "terminee"} ,
    {nom: "etude de marche",
    etat: "encours"} ,
    {nom: "business plan",
    etat: "afaire"} ,
    {nom: "realisation",
    etat: "afaire"}
  ]

  constructor() {}

  terminerTaches(): void{
    this.taches.forEach( tache => tache.etat = 'terminee')
  }

  annulerTaches(): void{
    this.taches.forEach( tache => tache.etat = 'afaire')
  }

  progresserTache(id: number){
    switch(this.taches[id].etat){
      case 'afaire': this.taches[id].etat = 'encours';break
      case 'encours': this.taches[id].etat = 'terminee'; break
    }
  }

  regresserTache(id: number){
    switch(this.taches[id].etat){
      case 'encours': this.taches[id].etat = 'afaire';break
      case 'terminee': this.taches[id].etat = 'encours'; break
    }
  }
}
