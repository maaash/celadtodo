import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Etat } from '../models/tache';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-tache-edit',
  templateUrl: './tache-edit.component.html',
  styleUrls: ['./tache-edit.component.scss']
})
export class TacheEditComponent implements OnInit {

  public etat = Etat

  constructor( private tacheService: TacheService) { }

  ngOnInit(): void {
  }

  onSubmit(formulaire: NgForm): void{
    console.log("enregistrement du formulaire: \n")
    console.log(formulaire.value)
    console.log(formulaire.valid)
    if (formulaire.valid) {

      const etatString:string = formulaire.value['etat']
      const etat:Etat = Etat[etatString as keyof typeof Etat]

      const newTache = this.tacheService.createTache(
        formulaire.value['nom'],
        //formulaire.value['etat']
        etat)
      console.log("nouvelle tache:", newTache)
    }
  }

}
