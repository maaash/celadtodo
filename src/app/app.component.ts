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


  constructor(){
    setTimeout(() => {
      this.isConnected=true
    }, 3000)
  }

  onSauvegarde(): void {
    console.log("Save en cours")
  }

}
