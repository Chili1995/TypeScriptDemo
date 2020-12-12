/**
 * 联合类型和类型保护的四种方式，as,in,typeof,instanceof
 */

interface Waiter{
  anjiao:boolean;
  say:()=>{}
}
interface Teacher{
  anjiao:boolean;
  skill:()=>{}
}

// animal任意值
function judgeWho(animal: Waiter | Teacher) {
  // 类型断言
  // if(animal.anjiao) {
  //   (animal as Teacher).skill();
  // }else {
  //   (animal as Waiter).say();
  // }

  // in 语法
  // 判断有没有skill方法
  if('skill' in animal) {
    animal.skill();
  } else {
    animal.say()
  }
}

// typeof
function add(one: string | number, two: string | number) {
  if(typeof one === 'string' || typeof two === 'string') {
    return `${one}+${two}`
  }

  return one + two;
}

// instanceof 只用在类上
class NumberObj {
  count: number;
}
function addObj(one: object | NumberObj, two: object | NumberObj) {
  if ( one instanceof NumberObj && two instanceof NumberObj) {
    return one.count + two.count
  }
}
