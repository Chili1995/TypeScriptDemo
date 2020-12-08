/**
 * 元组的使用和类型约束
 * 可以把元组看成数组的一个加强，它可以更好的控制或者说规范里边的类型。
 */

// 数字放在之间程序其实已经错误，但是这里不会报错
// const xiaojj : (string | number)[] = ['AAA', 3, 'BBB'];

// 元祖
const xiaojj : [string, string, number] = ['AAA', 'BBB', 3];

// 工作中不经常使用元组
// 老项目里面，数据源csv
const csvdata: [string, string, number][] = [
    ['aaa','bbb',3],
    ['aaa','bbb',3],
    ['aaa','bbb',3]
]



