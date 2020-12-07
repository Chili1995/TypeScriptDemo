
/**
 * 函数的参数类型定义和返回值的定义
 */

// 有时候函数是没有返回值的
// 类型注解void，代表没有任何返回值
function sayHello(): void {
    console.log('你好');
}
sayHello();

// never
// 如果一个函数是永远也执行不完的，就可以定义返回值为never
function errorFn() : never{
    throw new Error();
    console.log('永远执行不到');
};

function forFn() : never{
    while(true) {}
    console.log('永远执行不到');
};

// 当一个函数的参数是对象时，我们如何定义参数对象的属性类型
function add({a, b} : {a : number, b: number}) {
    return a + b;
}

function adda({a} : {a : number}) {
    return a;
}






