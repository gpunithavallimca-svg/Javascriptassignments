//import { log } from "node:console";
class operations{

 public add(a:number ,b:number)
 {
    console.log("addition:",a+b)
 }

 private sub(a:number ,b:number)
  {
    console.log("Subtraction:",a-b)
 }

protected mul(a:number ,b:number)
 {
    console.log("Multiplication:",a*b)
}

}

let obj=new operations();
// console.log(obj.add())
// console.log(obj.sub())
// console.log(obj.mul())
console.log(obj.add(10,5));
console.log(obj.sub(10,5));
console.log(obj.mul(10,5));

