function Father(firstName) {
    this.firstName = firstName
}

Father.prototype.say = function () {
    console.log('Father say....')
}

function Son(firstName, age) {
    // 1.继承属性
    // 执行Father函数，用当前的this来修改Father内的this，并传入参数
    // 借用父构造器给自己添加属性
    Father.call(this, firstName)

    // 这是子构造器自己的属性
    this.age = age
}
Son.prototype.run = function () {
    console.log('Son run ...')
}
// 2. 继承方法
// 浅拷贝，直接共用方法。如果有自己的方法就用自己的，否则就使用父构造器的
for (let fn in Father.prototype) {
    console.log(fn)
    if (!Son.prototype[fn])
        Son.prototype[fn] = Father.prototype[fn]
}

export {
    Father,
    Son
}
