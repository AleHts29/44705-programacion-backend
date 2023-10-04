import chai from "chai"
import { createHash } from "../../src/utils/index.js"
import { describe } from "node:test"

const expect = chai.expect

describe("Test de la libreria de Encriptacion de Utils", () => {

    // Before

    // BeforeEach


    // Test
    it('La funcion createHash debe generar un password encriptado', async function () {
        // Give
        const passwordTest = "123456"


        // Then
        const result = await createHash(passwordTest);
        console.log(`Resultado obtenido con createHash  ${result}`);


        // Assert
        expect(result).not.equal(passwordTest)
        expect(result).to.be.ok
        expect(result).not.to.be.undefined
        expect(result).not.to.be.empty;
    })


})