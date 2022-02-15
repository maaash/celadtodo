import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Celad todo list formation';

  public isConnected: boolean = true

  public tache1 = "Recherche d'idée"
  public tache2 = "etude de marche"
  public tache3 = "realisation"
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

  constructor(){
    setTimeout(() => {
      this.isConnected=true
    }, 3000)
  }

  onSauvegarde(): void {
    console.log("Save en cours")
  }

//public dateMaj: Date = new Date()
  public dateMaj: Promise<Date> = new Promise(
    (functionResolve, functionReject) => {
      const date = new Date()
      setTimeout( () => { functionResolve(date) }, 3000)
    }
  )

}
