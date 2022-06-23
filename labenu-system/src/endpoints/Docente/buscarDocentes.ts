import {Request, Response} from "express"
import {connection} from "../../data/connection"

export const buscarDocentes = async (req: Request, res: Response): Promise <void> =>{
    try {
        const resultado = await connection("Docente")
        res.status(201).send(resultado)
    } catch (error: any) {
        res.send({message: error.sqlMessage || error.message})
    }
}