// [1,2,3] instanceof Array ---- true

// obj instanceof className
// 变量className的原型 存在于 变量obj的原型链上
function instance_of(obj,className){    
    // 验证如果为基本数据类型，就直接返回false
    const baseType = ['string', 'number','boolean','undefined','symbol']
    if(baseType.includes(typeof(obj))) { return false }
    
    let classNameP  = className.prototype;  //取 className 的显式原型
    obj = obj.__proto__;       // 取 obj 的隐式原型
    while(true){               // 无限循环
        if(obj === null){      // 已经找到了最顶层
            return false;
        }
        if(obj === classNameP) {    // 严格相等
            return true;
        }
        obj = obj.__proto__  // 没找到,继续向上一层原型链查找
    }
}

export {
    instance_of
}