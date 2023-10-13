import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer'


// confi Ruta absoluta
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;



// Configuraciones de Multer
// Configuracion de destino
// Asignamcion de nombre del archivo
const storage = multer.diskStorage({
    // destino
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/public/img`)
    },

    // name - fileName
    // el nombre que quiero que tengan los archivos que voy a subir
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})


export const uploader = multer({
    storage,
    // si se genera algun error, lo capturamos
    onError: function (err, next) {
        console.log(err);
        next();
    }
})



// EJEMPLO Para PDF
/*
const express = require('express');
const multer = require('multer');

const app = express();

// Configura Multer para cargar archivos PDF en una carpeta específica.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Define la carpeta de destino
  },
  filename: function (req, file, cb) {
    // Genera un nombre de archivo único, por ejemplo, un timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '.' + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype === 'application/pdf') {
      cb(null, true); // Acepta el archivo PDF
    } else {
      cb(null, false); // Rechaza otros tipos de archivos
    }
  },
});

// Ruta para manejar la carga de archivos PDF
app.post('/uploadpdf', upload.single('pdfFile'), (req, res) => {
  res.send('Archivo PDF subido correctamente');
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
*/


