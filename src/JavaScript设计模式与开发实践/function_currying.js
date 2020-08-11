const currying = function(fn) {
    const args = [];

    return function c() {
        if (arguments.length === 0) {
            return fn.apply(this, args);
        } else {
            [].push.apply(args, arguments);
            return c;
        }
    }
}

let cost = (function() {
    let money = 0;
    
    return function() {
        for (var i = 0; i < arguments.length; i++) {
            money += arguments[i];
        }
        return money;
    }
})()

cost = currying(cost);

console.log(cost(100)); // => [Function: c]
console.log(cost(200)); // => [Function: c]
console.log(cost(300)); // => [Function: c]
console.log(cost()); // => 600