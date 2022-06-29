import { app } from "./app"
import { buscarTurmas } from "./endpoints/Turma/buscarTurmas"
import { criarTurma } from "./endpoints/Turma/criarTurma"
import { mudarModulo } from './endpoints/Turma/mudarModulo'
import { criarDocente } from "./endpoints/Docente/criarDocente";
import { mudarDocenteTurma } from "./endpoints/Docente/mudarDocenteTurma";
import { buscarDocentes } from "./endpoints/Docente/buscarDocentes";
import { buscarEstudantes } from "./endpoints/Estudante/buscarEstudantes";
import { criarEstudante } from "./endpoints/Estudante/criarEstudante";
import { mudarEstudanteTurma } from "./endpoints/Estudante/mudarEstudanteTurma";


//Criar documentação no Postman

// Turma

app.get("/turmas", buscarTurmas)
app.post("/turmas", criarTurma)
app.put("/turma", mudarModulo)


// Docentes

app.get("/Docente", buscarDocentes)
app.post("/Docente", criarDocente)
app.put("/Docente", mudarDocenteTurma)

//Estudante

app.get("/Estudante", buscarEstudantes)
app.post("/Estudante", criarEstudante)
app.put("/Estudante", mudarEstudanteTurma)