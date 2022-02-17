import { Injectable } from '@angular/core';
import { Utilisateurs } from '../models/utilisateurs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private utilisateurs: Utilisateurs[] = []

  constructor() {
      this.createUser(new Utilisateurs("Nicolas","y.maurel@gmail.fr",'dev', ["java", "javascript", "c#"] ))
   }
   getUsers(): Utilisateurs[] {
     return this.utilisateurs
   }

   createUser(user: Utilisateurs): Utilisateurs{
     this.utilisateurs.push(user)
     return user
   }

}
