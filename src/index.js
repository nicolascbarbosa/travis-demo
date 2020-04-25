const whoIAm = (name) => name ? `Your name is ${name}` : 'Are you exists?'

const isPositiveNumber = (num) => Math.sign(num) === 1;

module.exports = {
    whoIAm,
    isPositiveNumber
}