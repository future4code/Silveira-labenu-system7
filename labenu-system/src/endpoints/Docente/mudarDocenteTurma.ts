import {Request, Response} from "express"
import {connection} from "../../data/connection"

export const mudarDocenteTurma = async (req: Request, res: Response): Promise <void> =>{

    let errorCode: number = 400

    try {
        const {turma_id, docente_id} = req.body
        if(!turma_id || !docente_id){
        errorCode = 422
        throw new Error("Todos os campos obrigatórios");
        
    }

    await connection ("Docente")
    .update({
        turma_id: turma_id
    })
    .whre({
        id: docente_id
    })

    res.status(200).send({message: "Docente transferido."})
} catch (error: any){
    res.status(errorCode).send({message: error.sqlMessage || error.message})
}
}