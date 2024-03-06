// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs["USD"];
    return euroAmount * oneEuroIs["JPY"];
}

function fromYenToPound(yenAmount) {
    let euroAmount = yenAmount / oneEuroIs["JPY"];
    return euroAmount * oneEuroIs["GBP"];
}

module.exports = { fromDollarToYen, fromYenToPound };
