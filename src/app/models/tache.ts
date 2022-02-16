export enum Etat {
  AFAIRE = "à faire",
  ENCOURS = "en cours",
  TERMINEE = "terminée"
}

export interface Tache {
  id: number
  nom: string
  etat: Etat
}

export const tacheDefaut: Tache = {id: 0, nom:"", etat: Etat.AFAIRE}
