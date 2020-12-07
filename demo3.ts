// 基础静态类型
const count : number = 111;
const count1 : String = '111';
// console.log(count);

/**
 * 对象类型
 * 数组类型
 * 类类型
 * 函数类型
 */
const test1: {
    name: String,
    age: Number
} = {
    name: '测试啊',
    age: 22
};

const test2: String[] = ['test1', 'test2'];

class Person {};
const test3 : Person =  new Person();

const test4 :() => String = () => {return '123456'}

// console.log(test4);


/**
 * type annotation 类型注解
 */
let test5 : number;
test5 = 123;


/**
 * type inferrence 类型推断
 */

let test5Inference = 123;

function getTotal(a: number, b: number) {
    return a + b;
}
// total这个变量不需要加类型注解
// 因为当one和two两个变量加上注解后，TypeScript 就可以自动通过类型推断，分析出变量的类型。
const total = getTotal(1, 2);

const XiaoJieJie = {
    name: "刘英",
    age: 18,
};

// 在写 TypeScript 代码的一个重要宗旨就是每个变量，每个对象的属性类型都应该是固定的，如果你推断就让它推断，推断不出来的时候你要进行注释。





























