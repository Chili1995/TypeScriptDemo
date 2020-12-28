
namespace Components {
export namespace SunComponent{
  export class Test{
    constructor(){
      const elem = document.createElement('div');
      elem.innerText = '这是子命名空间';
      document.body.appendChild(elem);
    }
  }
}

  export class Header{
    constructor(){
      const elem = document.createElement('div');
      elem.innerText = '这是头部';
      document.body.appendChild(elem);
    }
  }
  
  export class Content{
    constructor(){
      const elem = document.createElement('div');
      elem.innerText = '这是body';
      document.body.appendChild(elem);
    }
  }
  
  export class Footer{
    constructor(){
      const elem = document.createElement('div');
      elem.innerText = '这是底部';
      document.body.appendChild(elem);
    }
  }
}


