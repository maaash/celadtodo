export class Utilisateurs {

  constructor(
    public nom: string,
    public email: string,
    public metier: string,
    public tech?: string[]

  ){}
}
