//  1) basic math functions
//'add()' is a valid function:
function add (a,b) {
    return a + b
}

// 1) basic math functions
//'subtract()' is a valid function:
function subtract (a,b) {
    return a - b
}

// basic math functions
//'multiply()' is a valid function:
function multiply (a,b) {
    return a * b 
}

//basic math functions
//'divide()' is a valid function:
function divide (a,b) {
    return a / b
}

//basic math functions
//increment(n) increments n and returns the result:
function increment(n) {
    return n += 1
}

//basic math functions
//decrement(n) decrements n and returns the result:
function decrement(n) {
    return n-= 1
}

//makeInt(n)
//parses n as an integer and returns the parsed integer:
function makeInt(string) {
    return parseInt(string, 10)
}

//reserveDecimal(n)
//preserves n's decimals (it parses n as a floating point number) and returns the parsed number:
//preserveDecimal(n)
//returns NaN as appropriate:
function preserveDecimal(string) {
    return parseFloat(string)
}