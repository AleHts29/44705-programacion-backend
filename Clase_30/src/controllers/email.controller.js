import nodemailer from 'nodemailer';
import config from '../config/config.js';
import __dirname from '../utils.js'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.gmailAccount,
        pass: config.gmailAppPassword
    }
});

// verificar conexion con gmail
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

const mailOptions = {
    from: 'Coder Test c_44705 - ' + config.gmailAccount,
    to: config.gmailAccount,
    subject: "Correo de prueba coderhouse - programacion backend clase 30",
    html: "<div><h1>Esto es un Test de envio de correos con Nodemailer!</h1></div>",
    attachments: []
}

const mailOptionsWithAttachments = {
    from: 'Coder Test c_44705 - ' + config.gmailAccount,
    to: config.gmailAccount,
    subject: "Correo de prueba coderhouse - programacion backend clase 30 - attachments",
    html: `
            <div>
                <h1 style="color:green">Esto es un Test de envio de correos con Nodemailer!</h1>
                <p>Ahora usando imagenes: </p>
                <img src="https://www.infobae.com/new-resizer/gY4FAo2c_hf_a0GeDoxOXPdureU=/arc-anglerfish-arc2-prod-infobae/public/CI5NWIC2B5BELN5T222GHNVJZE.jpg"/>
            </div>
    `,
    attachments: [
        {
            fileName: 'Meme de programacion',
            path: __dirname + '/public/images/meme.png',
            cid: 'meme'
        }
    ]

}

export const sendEmail = (req, res) => {
    try {
        let result = transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(400).send({ message: "Error", payload: error })
            }
            console.log('Message send: %s', info.messageId);
            res.send({ message: "Success!!", payload: info })
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error, message: "No se pudo enviar el email desde:" + config.gmailAccount });
    }
};

export const sendEmailWithAttachments = (req, res) => {
    try {
        let result = transporter.sendMail(mailOptionsWithAttachments, (error, info) => {
            if (error) {
                console.log(error);
                res.status(400).send({ message: "Error", payload: error })
            }
            console.log('Message send: %s', info.messageId);
            res.send({ message: "Success!!", payload: info })
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error, message: "No se pudo enviar el email desde:" + config.gmailAccount });
    }

}