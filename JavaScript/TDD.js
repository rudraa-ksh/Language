const timesTwo = require('./timesTwo'); // timesTwo is a module created using module.exports = timesTwo

// Write the first test
// WRITE YOUR CODE HERE - Use the test() function to write a test for timesTwo with the description "returns the number times 2"
// WRITE YOUR CODE HERE - Use expect() and toBe() to verify timesTwo(10) equals 20
test("return the number time 2", () => {
    expect(timesTwo(10)).toBe(20);
});