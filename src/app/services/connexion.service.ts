import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  public isConnected: boolean = false

  constructor() { }

  connexion(): Promise<boolean> {
    return new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          this.isConnected = true
          resolve( this.isConnected )
        }, 2000)
    })
  }

  deconnexion():void {
    this.isConnected = false
  }
}
