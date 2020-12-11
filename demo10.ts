/**
 * 类的构造函数
 */

class Per{
  // public name: string;
  // constructor(name: string) {
  //   this.name = name
  // }
  constructor(public name:string){}
}

// 子类一定要写super调用父类构造函数
class perex extends Per{
  constructor(public age:number){
    super('子的名字')
  }
}

// const per1 = new Per('你的名字')
const per1 = new perex(123)
console.log(per1.age);
console.log(per1.name);

