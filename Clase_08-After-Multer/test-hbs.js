const assert = require('assert');
const express = require('express');
const request = require('supertest');
const app = express();

// Configura el motor de plantillas Handlebars
app.set('view engine', 'hbs');
app.set('views', './views'); // Asegúrate de que la ruta sea correcta

// Definir una ruta que renderice una plantilla hbs
app.get('/render', (req, res) => {
    res.render('mi_plantilla', { titulo: 'Ejemplo de render hbs' });
});

describe('Pruebas de renderizado hbs', function () {
    it('debería renderizar la plantilla correctamente', function (done) {
        request(app)
            .get('/render')
            .expect(200) // Esperamos una respuesta exitosa (código 200)
            .end(function (err, res) {
                if (err) return done(err);
                // Verifica que la respuesta contenga el texto esperado
                assert(res.text.includes('Ejemplo de render hbs'));
                done();
            });
    });
});
