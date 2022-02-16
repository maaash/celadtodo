import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  public stateConnected: boolean = false

  constructor(
    private connexionService: ConnexionService,
    private router: Router) {

   }

  ngOnInit(): void {
    this.stateConnected = this.connexionService.isConnected
  }

  onConnexion(): void {
    this.connexionService.connexion()
    .then(isOk => {
      this.stateConnected = isOk
      if (isOk)
        this.router.navigateByUrl('/taches')
    }).catch(e => {console.log("echec connexion", e); this.stateConnected = false})
  }

  onDeconnexion(): void {
    this.connexionService.deconnexion()
    this.stateConnected = false
  }

}
