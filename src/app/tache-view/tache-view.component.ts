import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache, tacheDefaut } from '../models/tache';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-tache-view',
  templateUrl: './tache-view.component.html',
  styleUrls: ['./tache-view.component.scss']
})
export class TacheViewComponent implements OnInit {

  // ! sert a supprimer la verif sur l'init
  //public tache!: Tache
  public tache: Tache = tacheDefaut

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tacheService: TacheService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    const tache = this.tacheService.getTacheById(+id)
    if (tache.id !== 0) {
      this.tache = tache
    } else {
      this.router.navigateByUrl('erreur404')
    }
  }

}
