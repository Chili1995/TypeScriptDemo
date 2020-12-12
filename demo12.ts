/**
 * 类的只读属性和抽象类
 */

 // 类的只读属性
// class Person{
//   constructor(public readonly name: string){}
// }

// const person = new Person('xiaoming');
// console.log(person.name);

// 抽象类
abstract class employees {
  abstract skill()
}

// 继承抽象类必须实现里面的抽象方法
class employees1 extends employees{
  skill() {
    console.log('我会JavaScript')
  }
}

class employees2 extends employees{
  skill() {
    console.log('我会爬虫')
  }
}

class employees3 extends employees{
  skill() {
    console.log('我会数据库')
  }
}

const test = new employees3();
console.log(test.skill())

