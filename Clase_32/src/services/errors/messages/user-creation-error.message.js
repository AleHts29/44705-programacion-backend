export const generateUserErrorInfo = (user) => {
    // return msg custom
    return `Una o más propiedades fueron enviadas incompletas o no son válidas.
    Lista de propiedades requeridas:
        * fist_name: type String, recibido: ${user.first_name}
        * email: type String, recibido: ${user.email}
`;
};

// export const generateUserErrorInfoEN = (user) => {
//     // return msg custom
//     return `Una o más propiedades fueron enviadas incompletas o no son válidas.
//     Lista de propiedades requeridas:
//         * fist_name: type String, recibido: ${user.first_name}
//         * email: type String, recibido: ${user.email}
// `;
// };


// export const generateProductErrorInfo = (product) => {
//     // return msg custom
//     return `Una o más propiedades fueron enviadas incompletas o no son válidas.
//     Lista de propiedades requeridas:
//         * product_name: type String, recibido: ${product.name}
//         * price: type String, recibido: ${product.price}
// `;
// };