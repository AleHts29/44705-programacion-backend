import EErrors from '../errors-enum.js';

export default (error, req, res, next) => {
    console.error("Error detectado entrando al Error Handler");
    console.error(error.cause);

    // switch
};