import { Injectable } from '@angular/core';
import { Utilisateurs } from '../models/utilisateurs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  URLFirebase= "https://celadtodo-default-rtdb.europe-west1.firebasedatabase.app/"

  private utilisateurs: Utilisateurs[] = []

  constructor( private httpClient: HttpClient) {
    this.restaurationServeur()
      //this.createUser(new Utilisateurs("Nicolas","y.maurel@gmail.fr",'dev', ["java", "javascript", "c#"] ))
   }
   getUsers(): Utilisateurs[] {
     return this.utilisateurs
   }

   createUser(user: Utilisateurs): Utilisateurs{
     this.utilisateurs.push(user)
     return user
   }

   sauvegardeServeur():void {
     this.httpClient.post(this.URLFirebase+'user.json', this.utilisateurs).subscribe({
       next: () => console.log("Save OK"),
       error: (err)=> console.log("Save KO", err)
     })
   }

   restaurationServeur(): void{
     this.utilisateurs.length = 0
     this.httpClient.get<Utilisateurs[]>(this.URLFirebase+'user.json').subscribe({
       next: (response) => {
       response.forEach(u => this.utilisateurs.push(u))
       console.log("Users: ", response)
      },
       error: (err) => console.log("Save KO", err)
     })
   }

}
