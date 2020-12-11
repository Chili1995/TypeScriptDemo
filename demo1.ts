
/**
 * 基础静态类型
 * 只要在声明变量的后边加一个:号，然后加上对应的类型
 * number, null, undefinde, symbol, boolean, void
 */
const count: number = 918;
const myName: string = 'jspang';

// 静态类型
function test1() {
  let web: string = 'hello';
  console.log(web);
}
test1();

// 自定义静态类型
interface XiaoJieJie {
  uname: string;
  age: number;
}

const xiaohong: XiaoJieJie = {
  uname: "小红",
  age: 18,
};









