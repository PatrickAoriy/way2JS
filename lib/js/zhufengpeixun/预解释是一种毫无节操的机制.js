//预解释是一种毫无节操的一种机制
//自从学了预解释，从此节操是路人

//in： “num in window” ,这里的in是来判断，num是否是window的属性，是的话，返回true，不是的话返回false
// var obj={name:"张文静",age:17};
// console.log("name" in obj);//false
// console.log("eat" in obj);//false

//1.
//预解释的时候，不管你的条件是否成立，都要把带var的提前声明
//window的预解释， var num，相当于给window增加了一个num属性，window.num
//window.num。即，在全局作用域声明一个变量，一方面是全局的 一个变量 ，
//另一方面也给window增加了一个属性名
//
// if(!("num" in window)){//“num” in window -> true
//     var num=12;
// }
// console.log(num);//undefined

// 2.那么就需要考虑下面的这个函数，预解释的时候，会解释右边的部分吗？————事实上预解释的时候，只预解释“=”左边的部分，
// 右边的是值，不参与预解释。
// 匿名函数之函数表达式：把函数定义的部分当做一个值，赋值给我们的变量。/或者元素的某一个事件
// window下的预解释——> var fn;
// fn(); //这里执行的时候是没有值的，相当于这样的 undefined(),是不会执行的，会报错
// var fn = function(){
//     console.log("ok");
// };
//
//
// fn();//——>ok
// function fn(){
//     console.log("ok");
// }
// fn();//——>ok

// 那么对比上面的两种定义方式，第二个方式在函数的前后都可以调用，但是实际的框架项目中会
// 使用第一个定义的方式，因为，当在出错的时候，用第二种定义的话，就需要向上向下寻。比较 费劲。



//3.执行函数定义的function在全局作用域不预解释，当代码执行到这个位置的时候，定义和执行一起完成了。
//自执行函数:定义和执行一起完成了
// (function(name){})(100);
// ~function(name){}(100);
// !function(name){}(100);
// +function(name){}(100);
// -function(name){}(100);

// 4.函数体中虽然return下面的代码不再执行了（return后面的代码是执行的），但还是需要进行预解释；
// return的作用是返回值，既然return后面跟着的是我们要返回的值，所以这里不会进行预解释。
// function fn(){
//     //预解释，var num;
//     console.log(num);
//     return function(){
//     };
//     var num=17;
// }
// fn();

// 5.在预解释的时候，如果名字已经声明过了，就不需再次声明，但是需要重新的赋值。
// 在JS中，如果变量的名字和函数的名字重复了，也算冲突。
// 预解释的时候，   var fn;                ——> window.fn (预解释相当于给window增加了一个fn属性)
// 创建函数的时候， function fn =xxxxxxx   ——>window.fn=xxxxxx(地址) 也相当于给window增加了一个函数
// var fn=13;
// function fn(){
//     console.log("okkkkk");
// }
// fn();


//window预解释
//声明+定义 fn=xxxfff111
//声明，var fn;(因为上面声明了，这里不需要重复声明)
//声明（不重复进行声明）+定义 fn=xxxfff222（因为上面声明了，这里不声明，只定义。）
// fn——> xxxfff222
//
fn();
function fn(){console.log(1);}
fn();
var fn = 12;
fn();
function fn(){console.log(2);}
fn();
