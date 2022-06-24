import { Request, Response } from "express"
import { Docentes } from "../../classes/docentes"
import connection from "../../data/connection"


export const criarDocente = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {
        const { nome, email, dataNascimento, turma_id } = req.body
        if (!nome || !email || !dataNascimento || !turma_id) {
            errorCode = 422
            throw new Error("Os campos são obrigatórios")
        }

        const id = Date.now().toString()

        const data_nasc = dataNascimento.split('/').reverse().join('-')

        const docente: Docentes = new Docentes(id, nome, email, dataNascimento, turma_id)

        await connection("Docente").insert({ id, nome, data_nasc, turma_id })

        res.status(201).send({ message: "Docente criado." })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
}