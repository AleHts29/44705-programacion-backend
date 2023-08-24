import { generateUser } from '../utils.js'

export const getUsers = async (req, res) => {
    try {
        //Logica a implementar

        res.send({ status: "success", payload: "temporaly out of service -  Contact development team!" })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los usuarios:" });
    }
};