import { Component, OnInit } from '@angular/core';
import { TacheService } from './services/tache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  constructor(private tacheService: TacheService){ }

  ngOnInit(): void {

    this.taches = this.tacheService.taches

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
