const mul = (function(){
    const cache = {};

    const calculate = function() {
        let a = 1;
        for (let i = 0; i < arguments.length; i++) {
            a = a * arguments[i];
        }
        return a;
    }

    return function() {
        const key = Array.prototype.join.call(arguments);
        if (key in cache) {
            return cache[key];
        }

        return cache[args] = calculate.apply(null, arguments);
    }
})();