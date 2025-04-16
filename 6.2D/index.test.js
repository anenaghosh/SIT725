
const { hello, add, isEven, multiply } = require('./index');

test('returns Hello World', () => {
    expect(hello()).toBe("Hello World");
});

test('adds two numbers', () => {
    expect(add(3, 4)).toBe(7);
});

test('checks if number is even', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
});

test('multiplies two numbers', () => {
    expect(multiply(5, 6)).toBe(30);
});
