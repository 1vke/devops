function factorial(n) {
    if (n < 0) {
        return undefined;
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

exports.factorial = factorial
