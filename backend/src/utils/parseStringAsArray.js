module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(stringInArray => stringInArray.trim());
}