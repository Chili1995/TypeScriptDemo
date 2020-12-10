/**
 * 类的访问类型
 * private、protected和public
 */

 // 类的内部和类的外部
 class Person{
   
  public name: string;
  public sayHai(){
    console.log(this.name + ' ni hao')
  }
 }

 const person = new Person();
 person.name = 'lay';
 person.sayHai()
 console.log(person.name);