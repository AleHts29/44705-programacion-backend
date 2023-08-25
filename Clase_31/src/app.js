import express from 'express';
import config from './config/config.js';
//Clase de test:
import suma from './suma.js';
//import Routers
import usersRouter from './routers/users.router.js'

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Declare routers:
app.use("/api/users", usersRouter);

const SERVER_PORT = config.port;


app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
    //Logica a implementar - Test de pruebas
    const executeTest = config.runTests
    if (executeTest) {
        console.log("Ejecutando set de pruebas para suma:");
        // Escenarios
        let testPasados = 0
        const testTotales = 4


        // Test 1: La función debe devolver null si algun parametro no es numérico.
        testPasados = escenario1(testPasados);


        //Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:
        testPasados = escenario2(testPasados);


        //Test 3: La función debe poder realizar la suma correctamente.
        testPasados = escenario3(testPasados);


        //Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros.
        testPasados = escenario4(testPasados);



        console.log(`Test ejecutados: ${testTotales}, pasaron: ${testPasados}`);
    }
});


const escenario1 = (testPasados) => {
    console.log("Test 1: La función debe devolver null si algun parametro no es numérico.");
    // Given
    const num1 = "2"
    const num2 = 5

    // Then 
    let result = suma(num1, num2)


    // Assert o validacion.
    if (result === null) {
        console.log("Test 1: Success!\n");
        testPasados++;
    } else console.log(`Test 1: No pasa, se recibio ${typeof result}, pero se esperaba null`);
    return testPasados;
}



const escenario2 = (testPasados) => {
    console.log("Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:");
    // Given


    // Then 
    let result = suma()


    // Assert o validacion.
    if (result === 0) {
        console.log("Test 2: Success!\n");
        testPasados++;
    } else console.log(`Test 2: No pasa, se recibio ${result}, pero se esperaba 0`);
    return testPasados;
}



const escenario3 = (testPasados) => {
    console.log("Test 3: La función debe poder realizar la suma correctamente.");
    // Given
    const num1 = 2
    const num2 = 5


    // Then 
    let result = suma(num1, num2)


    // Assert o validacion.
    if (result === 7) {
        console.log("Test 3: Success!\n");
        testPasados++;
    } else console.log(`Test 3: No pasa, se recibio ${result}, pero se esperaba ${num1 + num2}`);
    return testPasados;
}




const escenario4 = (testPasados) => {
    console.log("Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros");
    // Given
    const numeros = [1, 2, 3, 4, 5]


    // Then 
    let result = suma(...numeros)


    // Assert o validacion.
    const expected = 15
    if (result === expected) {
        console.log("Test 4: Success!\n");
        testPasados++;
    } else console.log(`Test 4: No pasa, se recibio ${result}, pero se esperaba ${expected}`);
    return testPasados;
}
