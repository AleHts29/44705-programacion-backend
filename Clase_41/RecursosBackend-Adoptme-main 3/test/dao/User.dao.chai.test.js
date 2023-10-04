import UsersDao from "../../src/dao/Users.dao.js";
import mongoose from "mongoose";
import chai from 'chai'
import exp from "constants";


mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`)
const expect = chai.expect


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
        let emptyArray = [];


        // Then
        const result = await this.usersDao.get() // []


        // Assert that
        console.log(result);
        expect(result).to.be.deep.equal(emptyArray)
        expect(Array.isArray(result)).to.be.ok
        expect(Array.isArray(result)).to.be.equal(true)
        expect(result.length).to.be.deep.equal(emptyArray.length)
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
        expect(result._id).to.be.ok
    })

    afterEach(function () {
        mongoose.connection.collections.users.drop();
    });

})