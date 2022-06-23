import {Request, Response} from "express"
import {connection} from "../../data/connection"

export const mudarModulo = async (req: Request, res: Response): Promise<void> =>{
    let errorCode =400

    try{
        const {modulo} = req.body
        const id = req.params.id

        if (modulo <0 || modulo > 6) {
            errorCode = 422
            throw new Error ("Insira um módulo válido.")
        }

        if (id) {
            errorCode = 422
            throw new Error ("Insira um ID válido.")
        }

        if (typeof modulo !== "number") {
            errorCode = 422
            throw new Error ("Apenas números")
        }

        await connection ("Turma")
        .update ({modulo: modulo + 1})
        .where ({id})
         
        res.status(201).send({message: "Módulo alterado"})

    } catch (error: any){
        res.send({message: error.sqlMessage || error.message})
    }
}