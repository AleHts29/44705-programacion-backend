import UsersDao from "../../src/dao/Users.dao.js";
import mongoose from "mongoose";
import Assert from 'assert'



mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`)
const assert = Assert.strict;


describe('Testing Users Dao', () => {

    before(function () {
        this.usersDao = new UsersDao()
    })

    beforeEach(function () {
        this.timeout(5000)
        mongoose.connection.collections.users.drop();
    })

    // test 01
    it('El dao debe devolver los usuarios en formato de arreglo', async function () {
        // Given
        console.log(this.usersDao);
        const isArray = true


        // Then
        const result = await this.usersDao.get() // []


        // Assert that
        assert.strictEqual(Array.isArray(result), isArray)
    })

    // test 02
    it('El Dao debe agregar el usuario correctamente a la BD.', async function () {
        // Given
        let mockUser = {
            first_name: "Usuario de prueba 1",
            last_name: "Apellido de prueba 1",
            email: "correodeprueba1@gmail.com",
            password: "123456",
            role: 'user'
        }

        // Then
        const result = await this.usersDao.save(mockUser)


        // Assert
        assert.ok(result._id);
    })

    afterEach(function () {
        mongoose.connection.collections.users.drop();
    });

})