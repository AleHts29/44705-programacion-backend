import chai from 'chai';
import supertest from 'supertest'

const expect = chai.expect
const requester = supertest('http://localhost:8080')


describe('Testing Adopme', () => {


    // describe api/pets
    describe('Testing Pets Api', () => {

        // Test 01
        it("Crear Mascota: El API POST /api/pets debe crear una nueva mascota correctamente", async () => {

            // Given
            const petMock = {
                name: "Patitas",
                specie: 'Pez',
                birthDate: '10-10-2022'
            }

            // Then
            const { statusCode, ok, _body } = await requester.post('/api/pets').send(petMock)
            // console.log(_body);


            // Assert
            expect(statusCode).to.be.equal(200)
            expect(_body.payload).is.ok.and.to.have.property('_id')
            expect(_body.payload).to.have.property('adopted').and.to.be.deep.equal(false)
        })


        // Test 02
        it("Crear Mascota sin nombre: El API POST /api/pets debe retornar un estado HTTP 400 con error.", async () => {
            //Given:
            const petMock = {
                specie: "pez",
                birthDate: "10-10-2022"
            };

            //Then:
            const {
                statusCode,
                ok,
                _body
            } = await requester.post('/api/pets').send(petMock);
            // console.log(_body);

            //Assert that:
            expect(statusCode).is.eqls(400);
            expect(_body).is.ok.and.to.have.property('error');
            expect(_body).to.have.property('status');
        });


        // Test 03
        it("Crear mascota con Avatar (Test con uploads): Debe poder crearse una mascota con la ruta de la imagen.", async () => {
            //Given:
            const petMock = {
                name: "Orejitas",
                specie: "cat",
                birthDate: "10-11-2022"
            };

            //Then:
            const result = await requester.post("/api/pets/withimage")
                .field('name', petMock.name)
                .field('specie', petMock.specie)
                .field('birthDate', petMock.birthDate)
                .attach('image', './test/files/coderDog.jpg');

            //Assert that:
            expect(result.statusCode).to.eql(200);
            // console.log(result._body);
            expect(result._body.payload.image).to.be.ok;
        });

    })







    // describe api/users
    describe('Testing login and session with Cookies:', () => {

        before(function () {
            this.cookie;
            this.mockUser = {
                first_name: "Usuario de prueba 2",
                last_name: "Apellido de prueba 2",
                email: "correodeprueba2@gmail.com",
                password: "123456"
            }
        })


        // Test 01
        it("Test Registro Usuario: Debe poder registrar correctamente un usuario", async function () {
            // Given

            // Then 
            const {
                statusCode,
                ok,
                _body } = await requester.post('/api/sessions/register').send(this.mockUser)


            // Assert
            expect(statusCode).is.equal(200)
        })


        // Test 02 
        it("Test Login Usuario: Debe poder hacer login correctamente con el usuario registrado previamente.", async function () {

            // Given
            const mockLogin = {
                email: this.mockUser.email,
                password: this.mockUser.password
            }


            // Then 
            const result = await requester.post('/api/sessions/login').send(mockLogin)
            // console.log(result);
            const cookieResult = result.headers['set-cookie'][0]
            // console.log(cookieResult);


            // Assert
            expect(result.statusCode).is.equal(200)

            const cookieData = cookieResult.split('=')
            this.cookie = {
                name: cookieData[0],
                value: cookieData[1]
            }
            expect(this.cookie.name).to.be.ok.and.equal('coderCookie')
            expect(this.cookie.value).to.be.ok
        })


        // Test 03
        it('Test Ruta Protegida: Debe enviar la cookie que contiene el usuario y destructurarla correctamente.', async function () {
            // Given

            // Then
            const { _body } = await requester.get('/api/sessions/current').set('Cookie', [`${this.cookie.name}=${this.cookie.value}`])
            // console.log(_body);


            // Assert
            expect(_body.payload.email).to.be.ok.and.equal(this.mockUser.email)
        })
    })


})



// Usando Query params
// test.js
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('./app'); // Reemplaza con la ubicación de tu archivo app.js

// chai.use(chaiHttp);
// const expect = chai.expect;

// describe('API Tests', () => {
//   it('should return user details with query parameters', (done) => {
//     chai
//       .request(app)
//       .get('/api/users')
//       .query({ name: 'John', age: 30 }) // Define los parámetros de consulta aquí
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.have.property('name', 'John');
//         expect(res.body).to.have.property('age', '30');
//         done();
//       });
//   });

//   // Agrega más pruebas según sea necesario
// });
