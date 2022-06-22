import { Usuarios } from "./usuarios";

export class Estudantes extends Usuarios{
    hobbies: string[]

constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    hobbies: string[]
    ){
    super(id,nome, email, data_nasc, turma_id)
    this.hobbies = hobbies
}

}