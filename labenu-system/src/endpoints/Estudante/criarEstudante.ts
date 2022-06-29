import { Request, Response } from "express"
import connection from "../../data/connection"

export const criarEstudante = async (req: Request, res: Response): Promise<void> => {

    try {
        const id = Date.now().toString()
        const { nome, email, dataNascimento, tuma_id } = req.body
        const data_nasc = dataNascimento.split('/').reverse().join('-')

        await connection("Estudante").insert({ id, nome, email, data_nasc, tuma_id })

        res.status(201).send("Estudante adicionado")

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}