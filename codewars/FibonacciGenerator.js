/**
 * Function generator that returns a function which always returns the next fibonacci number on each invocation
 * @returns {Function}
 */
function genfib(){
    function* foo() {
        let [a, b] = [0, 1];
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    };
    const fib = foo();
    return () => {
        return fib.next().value;
    }
}

let s = genfib();
console.log(s());
console.log(s());
console.log(s());
console.log(s());
console.log(s());
console.log(s());