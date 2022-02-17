import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateurs } from '../models/utilisateurs';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'app-utilisateur-edit',
  templateUrl: './utilisateur-edit.component.html',
  styleUrls: ['./utilisateur-edit.component.scss']
})
export class UtilisateurEditComponent implements OnInit {

  uForm: FormGroup = new FormGroup({})

  constructor( private builder: FormBuilder,
    private us: UtilisateursService,
    private router: Router) {

   }

  ngOnInit(): void {
    this.uForm = this.builder.group( {
      nom   : ['', [Validators.required, Validators.minLength(2)] ],
      email:['', [Validators.required, Validators.email]],
      metier:['',Validators.required],
      tech:this.builder.array([])
    })
  }

  onEnregistrerUser(): void{
    console.log("Enregistrement user en cours")
    console.log(this.uForm)
    console.log(this.uForm.value)
    console.log(this.uForm.valid)

    if(this.uForm.valid){
      const newUser = new Utilisateurs(this.uForm.value['nom'],
      //meme type d 'affectation
      //this.uForm.value.email,
      this.uForm.value['email'],
      this.uForm.value['metier'],
      this.uForm.value['tech']?this.uForm.value['tech']:[])

      this.us.createUser(newUser)
      this.router.navigateByUrl('/utilisateurs')
    }
  }

  /**
   *
   * @returns champ tech en FormArray = typage fort
   */
  getTechno(): FormArray{
    return this.uForm.get('tech') as FormArray
  }

  onAjoutTechno(): void{
    const newTechCtrl: FormControl = this.builder.control('', Validators.required)
    this.getTechno().push(newTechCtrl)
  }

  onSuppressionTechno(id: number): void {
    this.getTechno().removeAt(id)
  }

}
