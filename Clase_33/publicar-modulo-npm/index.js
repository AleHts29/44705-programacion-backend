module.exports = {
    sum: (a, b) => a + b,
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) {
            throw new Error("No se puede dividir por 0")
        }
        return a / b
    }
}