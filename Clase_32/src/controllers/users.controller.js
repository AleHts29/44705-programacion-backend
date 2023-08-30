import CustomError from "../services/errors/CustomError.js";
import EErrors from "../services/errors/errors-enum.js";
import { generateUserErrorInfo } from "../services/errors/messages/user-creation-error.message.js";

const users = [];

export const getUsers = (req, res) => {
    try {
        res.send({ message: "Success!", payload: users });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los usuarios." });
    }

}

export const saveUser = (req, res) => {
    // Logica a implementar
    // try {
    console.log(req.body);

    const { first_name, last_name, age, email } = req.body;
    if (!first_name || !email) {
        // creamos custom Error
        CustomError.createError({
            name: "User creation error",
            cause: generateUserErrorInfo({ first_name, last_name, age, email }),
            message: "Error to create user",
            code: EErrors.INVALID_TYPES_ERROR
        })
    }

    // Si todo esta bien, armamos un DTO con la data ya controlada
    const userDTO = {
        first_name,
        last_name,
        age,
        email
    }

    if (users.length === 0) {
        userDTO.id = 1
    } else {
        userDTO.id = users[users.length - 1].id + 1;
    }
    users.push(userDTO)
    res.status(201).send({ status: "Success", payload: userDTO })
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send({ error: error.code, message: error.message });
    // }




}