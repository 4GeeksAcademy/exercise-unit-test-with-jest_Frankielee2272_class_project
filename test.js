const { fromDollarToYen, fromYenToPound } = require('./app.js');

test("One dollar should be 146.26 yen", function() {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26);
});

test("One yen should be 0.0056 pounds", function() {
    expect(fromYenToPound(1)).toBeCloseTo(0.0056);
});
