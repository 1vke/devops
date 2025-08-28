function factorial(n) {
    if (n < 0) {
        throw RangeError("Input number needs to be a zero or positive number");
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

exports.factorial = factorial
