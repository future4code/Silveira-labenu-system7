import {Request, Response} from "express"
import {connection} from "../../data/connetion"

export const buscarTurmas = async (req: Request, res: Response): Promise<void> =>{

    try {
        const resultado = await connection ("Turma")
        res.status(201).send(resultado)

    } catch (error: any) {
        res.send({message: error.sqlMessage || error.message})
    }
}