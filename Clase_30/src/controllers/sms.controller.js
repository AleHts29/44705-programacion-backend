import BusinessService from "../services/dao/business.dao.js";
import config from "../config/config.js";
import twilio from 'twilio';

// configuracion twilio
const twilioClient = twilio(config.twilioAccountSID, config.twilioAuthToken)
const twilioSMSOPtions = {
    body: "Esto es un mensaje SMS de prueba usando Twilio desde  CoderHouse - C_44705",
    from: config.twilioSmsNumber,
    to: config.twilioToSmsNumber
}


export const sendSMS = async (req, res) => {
    try {
        console.log("Enviando SMS usando Twilio account");
        console.log(twilioClient);
        const result = await twilioClient.messages.create(twilioSMSOPtions);
        res.send({ message: "Success", payload: result })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error })
    }
}