/**
 * 泛型
 */

// 泛型：[generic - 通用、泛指的意思],那最简单的理解，泛型就是泛指的类型。
// 多泛型
function jion<T, P>(one: T, two: P) {
  return `${one}${two}`;
}

jion<string, number>('1', 12);

// 数组中泛型使用
function myFan<T>(parmas: Array<T>) {
  return parmas;
}

myFan<string>(['123','456']);


/**
 * 类里里面的泛型
 */

interface Girl{
  name: string;
}

// 约束
// class SelectGirl<T extends string | number>{
class SelectGirl<T extends Girl>{
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl([
  {name: 'tom'},
  {name: 'tom1'},
  {name: 'tom2'},
]);
console.log(selectGirl.getGirl(1)); // {name: 'tom1'}

