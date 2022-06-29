enum TURMA {
    MODULO_0 = "0",
    MODULO_1 = "1",
    MODULO_2 = "2",
    MODULO_3 = "3",
    MODULO_4 = "4",
    MODULO_5 = "5",
    MODULO_6 = "6"
}

export class Turma {
    id: string;
    nome: string;
    modulo: TURMA;

    constructor(
        nome: string,
        modulo: TURMA
    ) {
        this.id = Date.now().toString(),
        this.nome = nome,
        this.modulo = modulo
    }

}