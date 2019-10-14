import * as imgs from './imgs';

export const dataJS = {
  type: 'js',
  info: [
    {
      title: '数据类型',
      showTip: false,
      tip: 'Number Bollen undefined null String Object Symbol',
      links: [
        {
          desc: '数据类型有哪些',
          link: 'https://www.cnblogs.com/chen-jack/p/9978704.html'
        }
      ],
    },
    {
      title: '判断数组',
      showTip: false,
      tip: '有多种方法，Array.isArray(xx)最可靠 instanceof方法也不错 xx.instanceof Array',
      links: [
        {
          desc: '判断是否为数组',
          link: 'https://segmentfault.com/a/1190000006150186'
        }
      ],
    },
    {
      title: '闭包',
      showTip: false,
      tip: '简单讲，闭包就是指有权访问另一个函数作用域中的变量的函数',
      imgs: [imgs.bibao],
      links: [
        {
          desc: '关于闭包',
          link: 'https://segmentfault.com/a/1190000006875662'
        }
      ],
    },
    {
      title: 'this指向的问题',
      showTip: false,
      tip: 'this 永远指向最后调用它的那个对象！！！箭头函数的 this 始终指向函数定义时的 this，而非执行时',
      links: [
        {
          desc: 'this问题以及call、apply、bind',
          link: 'https://juejin.im/post/59bfe84351882531b730bac2'
        }
      ],
    },
    {
      title: '继承',
      showTip: false,
      tip: `1.构造函数继承：function Child1() { Parent1.call(this);this.type = "child";} 这种方法不好，只能继承父类的实例属性和方法、原型（prototype）上的无法继承
        2.原型链继承：Child2.prototype = new Parent2(); 会有数组问题 缺点，s1.__proto__ 和 s2.__proto__指向同一个地址即 父类的prototype
        3.组合式继承：先1后2（先call后改原型链）只是会有new两次父类的问题
        4.组合式优化：Child2.prototype = new Parent2(); ——> Child4.prototype = Parent2.prototype; Child4.prototype.constructor = Child4;
        5.ES6 Class继承：关键字extends ，以及在constructor函数中的super(props)。super代表父类的构造函数，返回子类实例
        all: ES5与ES6区别——前者先创建子类的this，再将父类的方法添加上去（apply call）；后者先将父类实例的属性方法添加到this（调用super），再用子类构造函数修改this
        `,
    },
  ],
};

export const dataReact = {
  type: 'react',
  info: [],
};

export const dataCss = {
  type: 'css',
  info: [],
};

export const dataHtml = {
  type: 'html',
  info: [],
};
