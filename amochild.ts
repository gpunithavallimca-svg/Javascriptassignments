import { EmployeeSignup } from "./accessModifiers"

class HR extends EmployeeSignup{

empUpdate(){

    console.log(this.eContact);
    
}

}

let hr=new HR()
hr.empUpdate()