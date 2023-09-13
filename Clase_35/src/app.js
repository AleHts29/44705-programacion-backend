import express from 'express'
import config from "./config/config.js"
import cluster from 'cluster'
import { cpus } from 'os';


import performanceRouter from './routers/performance-test.router.js'
import { addLogger } from './config/logger.js'



console.log("Preguntar si es el cluster primario:");
console.log(cluster.isPrimary);
if (cluster.isPrimary) {
    const numeroDeProcesadores = cpus().length
    console.log("Soy proceso primario y voy delegar el trabajo a un fork.");

    console.log("Numero de CPUs en mi maquina: ");
    console.log(numeroDeProcesadores);

    for (let i = 0; i < numeroDeProcesadores - 1; i++) {
        cluster.fork() //se utiliza para crear un nuevo proceso hijo (worker)
    }

    // Lister para manejar la muerte de un worker
    cluster.on('exit', worker => {
        console.log(`Worker ${worker.process.pid} died! :(`);
        cluster.fork()
    })
} else {
    console.log("Este es un proceso Fork! Soy un worker!!");
    console.log(`Soy un proceso worker con el id: ${process.pid}`);

    const app = express();

    // Middleware
    app.use(addLogger)

    app.get('/', (req, res) => {
        res.send({ status: "Success", message: `Peticion atendida por el Worker: ${process.pid}` })
    })

    app.use('/api/performance', performanceRouter)


    const PORT = 9090
    app.listen(PORT, () => {
        console.log(`Server run on port: ${PORT}`);
    })
}

