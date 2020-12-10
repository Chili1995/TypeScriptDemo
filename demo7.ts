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
    age: number;
    waisline ? : number;
    [propname:string]: any; // 任意类型
   say(): string
 }

 // 继承
 interface Teacher extends Company {
    teach(): string
 }

 class man implements Company {
   name ='张三'
   age =18
   waisline =90
   sex ='女'
   say() {
      return '大家好，谢谢各位';
   }
 }

 const people = {
   name: '李四',
   age: 18,
   waisline: 90,
   sex: '女',
   say() {
      return '大家好，谢谢各位';
   },
   teach() {
      return '我会教书'
   }
}

 const getRes = (people:Teacher) => {
    console.log(people.name + '的年龄是' + people.age);
    people.waisline && console.log(people.name + '的腰围是' + people.waisline);
    people.sex && console.log(people.name + '的性别是' + people.sex);
    console.log(people.name + '说' + people.say());
    console.log(people.name + '说' + people.teach());
 }

 getRes(people);
