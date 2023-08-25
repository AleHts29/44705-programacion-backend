import { generateUser } from '../utils.js'

export const getUsers = async (req, res) => {
    try {
        //Logica a implementar
        let users = [];
        let numUsuarios = 200
        for (let index = 0; index < numUsuarios; index++) {
            users.push(generateUser())
        }
        res.send({ status: "success", payload: users })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los usuarios:" });
    }
};




