//支持多个函数
module.exports = {
    fun2:function (res) {
        console.log('I am fun2!');
        res.write('我是fun1');
    },
    fun3:function (res) {
        console.log('I am fun3!');
        res.write('我是fun3')
    }
}

/*
function otherFunction(res) {
    console.log('I am Jason!');
    res.write('hello,my name is jason!')
}
module.exports = otherFunction;//只支持一个函数*/
