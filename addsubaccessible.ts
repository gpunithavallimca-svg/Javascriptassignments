//import { log } from "node:console";
class operationsnew{

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
//parametrized constructor & directly access the property calling inside the public method
public display(a:number,b:number)
{
    this.sub(a,b);
    this.mul(a,b);
}
}
//create object for the class and call sub and mul method from display outside the class
let obj1=new operationsnew();
// console.log(obj.add())
// console.log(obj.sub())
// console.log(obj.mul())
obj1.add(10,5);
obj1.display(10,5);
///console.log(obj.mul(10,5));

