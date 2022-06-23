import {Request, Response} from "express"
import {connection} from "../../data/connection"


export const mudarEstudanteTurma = async (req: Request, res:Response): Promise <void> =>{
    try{
        const turma_id = req.body.turma_id
        const idEstudante = req.params.idEstudante

        if (!turma_id || !idEstudante) {
            res.status(404)
            throw new Error ("Todos os campos são obrigatórios")
        }

        await connection ("Estudante")
        .update({
            turma_id: turma_id
        })
        .where({
            id: idEstudante
        })

        res.status(200).send({message:"Alterção de turma feita com sucesso!"})

    } catch (error: any) {

        res.send({message: error.message || error.sqlMessage})

    }
}