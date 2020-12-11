/**
 * 13.TypeScript 类的 Getter、Setter 和 static 使用
 */

 // Getter、Setter
class xiaohong2{
  constructor(private _age:number){}
  // 属性
  get age() {
    return this._age - 10;
  }
  set age(age:number){
    this._age = age + 3
  }
}

const getXiaohong = new xiaohong2(22);
getXiaohong.age = 25;
console.log(getXiaohong.age);

/**
 * 在不想new出对象的时候直接使用这个方法
 * 静态修饰符static
 */

 class Girl{
  static sayLove() {
     return 'nihaoya'
   }
 }

 console.log('static模式下直接调用输出' + Girl.sayLove());
