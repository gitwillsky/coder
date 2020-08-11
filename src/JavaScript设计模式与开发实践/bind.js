function bind() {
    // 保存函数对象
    let func = this;
    let newThis = [].shift.call(arguments);
    let args = [].slice.call(arguments);

    // bind函数返回的是一个绑定了this的新函数
    return function() {
        // 改变函数对象的this为bind对象
        return func.apply(newThis, [].concat.call(args, [].slice.call(arguments)));
    }
}