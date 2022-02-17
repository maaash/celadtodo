import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styles: [
  ]
})
export class TacheListComponent implements OnInit, OnDestroy {

  title = 'Celad todo list formation';

  public isConnected: boolean = true

  public tache1 = "Recherche d'idée"
  public tache2 = "etude de marche"
  public tache3 = "realisation"
  /*
  public taches = [
    {nom: "Recherche idee projet",
    etat: "terminee"} ,
    {nom: "etude de marche",
    etat: "encours"} ,
    {nom: "business plan",
    etat: "afaire"} ,
    {nom: "realisation",
    etat: "afaire"}
  ]
  */
  public taches: any[] = []
  public secondes: number = 0
  private sub?: Subscription


  constructor(private tacheService: TacheService){ }

  ngOnDestroy(): void{
    console.log("destroying var compteur")
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }
  ngOnInit(): void {

    this.taches = this.tacheService.taches

  //ex observable
    //const compteur: Observable<number> = of(10,12,44,50)
    const compteur: Observable<number> = interval(1000)
    compteur.subscribe(num => console.log("listener 1: ", num))
    this.sub = compteur.subscribe( {
      next: num => {console.log("listener 2: ", num)
      this.secondes = num},
      error: err => console.log("error: ", err),
      complete: () => console.log("listener 2 stopped")
    })

    setTimeout(() => {
      this.isConnected=true
    }, 3000)

    let promesse: Promise<string> = new Promise(
      (resolve, reject) => {
          setTimeout( () => {
            let tirage = Math.random()
            if (tirage  >0.5){
              resolve('OK: '+tirage)
            }else {
              reject('KO: '+tirage)
            }
          }, 2000)
      }
    )

    promesse
    //Si resolve
      .then( str => console.log("reponse: ", str))
    //Si reject
      .catch( e => console.log("erreur: ", e))
  }

  onSauvegarde(): void {
    console.log("Save en cours")
    console.log(this.taches)
  }

  allTermine(): void{
    this.tacheService.terminerTaches()
  }

  todoAll(): void{
    this.tacheService.annulerTaches()
  }



//public dateMaj: Date = new Date()
  public dateMaj: Promise<Date> = new Promise(
    (functionResolve, functionReject) => {
      const date = new Date()
      setTimeout( () => { functionResolve(date) }, 3000)
    }
  )


}
