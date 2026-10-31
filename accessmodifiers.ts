export class EmployeeSignup{

//properties

public eName:string="Hari"
public  eId:number=3400 //readonly provides only read access
//public readonly eId:number=3400 //readonly provides only read access
private eSalary:number=40000
protected eContact:number=56789356782
static email:string="testleaf.com"

//static method

static smethod(){

    console.log("its a static method");
    
}

//methods
//by default it is public access modifier
printDetails(){
console.log(`the employee name is:${this.eName}: ${this.eId}: ${this.eSalary}`);

}

//read the eSalary outside the class using get

public get readData(){
    return this.eSalary
}

//modify the eSalary outside the class using get
public set writeData(sal:number){
    console.log(this.eSalary=sal);
    
}

//directly access the property calling inside the public method
public newupdate(){

    this.eSalary
}

// public neweID(){
//     this.eId=123
// }

}

let esign=new EmployeeSignup()
console.log(esign.eId)
console.log(esign.eName)
esign.printDetails()
console.log(esign.readData)
esign.writeData=30000
console.log(esign.readData);

EmployeeSignup.smethod()
console.log(EmployeeSignup.email)