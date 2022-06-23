import {Request, Response} from "express"
import {connection} from "../../data/connection"

export const buscarEstudantes = async (req: Request, res: Response): Promise <void> =>{
    let errorCode =400

    try{
        const nome: string = req.params.nome
        const resultado = await connection ("Estudante")
        .where("nome", "like", `%${nome}%`)

        if(resultado.length === 0) {
            errorCode =404
            throw new Error ("Estudante não encontrado.")
        }
        res.status(200).send(resultado[0])

    } catch (error:any) {
        res.status(errorCode).send(error.sqlmessage || error.message)
    }
}