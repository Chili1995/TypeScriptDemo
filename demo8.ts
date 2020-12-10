/**
 * 类的概念和使用
 */

 class Lady{
    content = '你好'
    sayHelo(){
        return this.content
    }
 }

 
 // 子类继承父类
 class xiaohong extends Lady{
    // 重写
    // sayHelo(){
    //     return '你好呀'
    // }
    // super关键字
    sayHelo(){
        return super.sayHelo() + '. 吃了吗'
    }

     saySomething(){
         return '你好小红'
     }
 }

 // 调用子类
 const godd = new xiaohong();
 console.log(godd.sayHelo()); // 父类里面的
 console.log(godd.saySomething()); // 子类里面的