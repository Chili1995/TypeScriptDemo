/**
 * 数组类型
 */

const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined, undefined];

const arr: (number | string)[] = [1, "string", 2];


/**
 * 数组中对象类型的定义
 */

//  const xiaojiejie : {name: string, age:number}[] = [
//      {name: 'aaa',age: 18},
//      {name: 'bbb',age: 8}
//  ]

// 类型别名(type alias)
type people = {name: string, age:number}
//  const xiaojiejie : people[] = [
//     {name: 'aaa',age: 18},
//     {name: 'bbb',age: 8}
// ]

// 类的方法
class person {
    name: string;
    age: number;
}
const xiaojiejie : person[] = [
    {name: 'aaa',age: 18},
    {name: 'bbb',age: 8}
]