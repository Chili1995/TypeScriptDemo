/**
 * TypeScript 中的 interface 接口
 */

 // 案例

//  const range = (name: string, age: number) => {
//     (age >= 18 && age < 30) && console.log(name + '恭喜你进入面试啦');
//     (age >= 30 || age < 18) && console.log(name + '对不起你被淘汰了');
//  }

//  const getRes = (name: string, age: number) => {
//     console.log(name + '的年龄是' + age);
//  }

//  range('张晓红', 60);
//  getRes('张晓红', 60);

 
// 定义一个接口
 interface Company {
    name: string;
    age: number
 }

 const getRes = (people:Company) => {
    console.log(people.name + '的年龄是' + people.age);
 }

 const people = {
    name: '李四',
    age: 18
 }

 getRes(people);
