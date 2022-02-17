import { Injectable } from '@angular/core';
import { Etat, Tache, tacheDefaut } from '../models/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  public taches: Tache[] = [
    {id: 1,
    nom: "Recherche idee projet",
    etat: Etat.TERMINEE} ,
    {id:2,
    nom: "etude de marche",
    etat: Etat.ENCOURS} ,
    {id: 3,
    nom: "business plan",
    etat: Etat.AFAIRE} ,
    {id: 4,
    nom: "realisation",
    etat: Etat.AFAIRE}
  ]

  constructor() {}

  getTacheById(id: number): Tache {
    const tache = this.taches.find( tache => tache.id===id)
    if (tache!== undefined){
      return tache
    }else {
      return tacheDefaut
    }
  }

  terminerTaches(): void{
    this.taches.forEach( tache => tache.etat = Etat.TERMINEE)
  }

  annulerTaches(): void{
    this.taches.forEach( tache => tache.etat = Etat.AFAIRE)
  }

  progresserTache(id: number): void{
    const tache = this.getTacheById(id)
    switch(tache.etat){
      case Etat.AFAIRE: tache.etat = Etat.ENCOURS;break
      case Etat.ENCOURS: tache.etat = Etat.TERMINEE; break
    }
  }

  regresserTache(id: number): void{
    const tache = this.getTacheById(id)
    switch(tache.etat){
      case Etat.ENCOURS: tache.etat = Etat.AFAIRE;break
      case Etat.TERMINEE: tache.etat = Etat.ENCOURS; break
    }
  }

  createTache(newNom: string, newEtat: Etat): Tache{
    const newId = this.taches[this.taches.length-1].id + 1
    const tache: Tache = {
      id: newId,
      nom: newNom,
      etat: newEtat
    }
    this.taches.push(tache)
    return tache
  }
}
