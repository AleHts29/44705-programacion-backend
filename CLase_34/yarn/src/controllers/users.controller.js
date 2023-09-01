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
    try {
        console.log(req.body);
        const { first_name, last_name, age, email } = req.body;
        if (!first_name || !email) {
            return res.status(400).send({ status: "error", error: "Parametros requeridos para crear el usuario!" });
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
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error", message: error });
    }
}