Function.prototype.before = function (fn) {
    const self = this;
    return function() {
        fn.apply(this, arguments);
        return self.apply(this, arguments);
    }
}

Function.prototype.after = function (fn) {
    const self = this;
    return function() {
        const ret = self.apply(this, arguments);
        fn.apply(this, arguments);
        return ret;
    }
}

function show(name) {
    console.log(name);
}

show = show.before(function() {
    console.log('call before');
}).after(function() {
    console.log('call after');
})

show('me'); 
// => call before
// => me
// => call after