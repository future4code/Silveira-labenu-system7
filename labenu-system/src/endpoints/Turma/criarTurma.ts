import {Request, Response} from "express"
import {connection} from "../../data/connection"

export  const criarTurma = async (req: Request, res: Response): Promise <void> =>{
    let errorCode = 400

    try{
        const id = Date.now().toString()
        const {nome, modulo} = req.body

        if(!nome || !modulo){
            errorCode = 422
            throw new Error ("Todos os campos são obrigatórios")
        }
        

        if(!nome){
            errorCode = 422
            throw new Error ("Nome da turma é obrigatório")
        }

        if (modulo !=0){
            errorCode = 422
            throw new Error ("O módulo inicial")
        }

        await connection ("Turma")
          .insert({id, nome, modulo})

          res.status(201).send({message:"Turma criada"})

    } catch (error:any){
        res.send({message: error.message || error.sqlMessage})
    }
}