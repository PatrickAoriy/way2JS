//
// function fn(){
//     console.log("不忘初心");
// }
// console.log(fn);//把整个函数的定义部分（函数本身）在控制台输出
// console.log(fn());//把当前函数执行的“返回”结果（return后面写的是啥，返回的值就是啥），如果没有return那么输出的默认值是undefined
//console.log(num);因为预解释的原因，这里的值是undefine
var num =12;//12
console.log(num);
var obj={
    name:"ann",
    age:13
};
fn(100,200);//这里是可以调用的，因为预解释的时候，函数声明且定义了；
function fn(num1,num2){
    var total=num1+num2;
    console.log(total);
}
