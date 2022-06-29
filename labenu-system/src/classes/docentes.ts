import { Usuarios } from "./usuarios";

export class Docentes extends Usuarios {
    constructor(
        id: string,
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string
    ) {
        super(id, nome, email, data_nasc, turma_id)
    }

}