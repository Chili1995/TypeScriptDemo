/**
 * 类的访问类型
 * private、protected和public
 */

// public从英文字面的解释就是公共的或者说是公众的，在程序里的意思就是允许在类的内部和外部被调用.
// private 访问属性的意思是，只允许再类的内部被调用，外部不允许调用
// protected 允许在类内及继承的子类中使用

// 类的内部和类的外部
class Person {
  /**类的内部 */
  public name: string;
  // 私有
  // private name: string;
  // 允许在类内及继承的子类中使用
  // protected name: string;
  public sayHai() {
    console.log(this.name + ' ni hao')
  }
}

class Teach extends Person{
  // protected 允许在类内及继承的子类中使用
  public sayBys(){
    this.name
  }
}

/**类的外部 */
const person = new Person();
person.name = 'lay';
person.sayHai()
console.log(person.name);
