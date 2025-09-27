// ! Basic class
class Department {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    // describe(){
    //     console.log("Department",  this.name);
    // }
    describe(this :Department){
        console.log("Department",  this.name);
    }
}

const account=new Department("mansi")
account.describe()


const accountCopy={
    name:"rai",
    describe: account.describe   // no object undefine output
}

accountCopy.describe()





// Access Modifier  


class Department2{
    name: string;
   private employees :string[];
//  constructor(public name :string,private employees:string[]){
   
//     }
    constructor(n:string){
        this.name=n;
        this.employees=[]
    }

    describe(this:Department2){
        console.log("Department2",this.name);
    }
    addEmployee(emp:string){
        this.employees.push(emp);
    }

    printemployInfo(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const account2=new Department2("rai");
account2.describe();
account2.addEmployee("ambuj")

// account2.employees=["sdt"]     bug
account2.printemployInfo()




// Readonly

class Department3{
   public name: string;
   private employees :string[];
   private readonly id:string
   protected employees2:string []

   constructor(id:string,n:string){
    this.name=n;
     this.id="d1"
     this.employees=[]
     this.employees2=[]
   }

    describe(this:Department3){ 
        // this.id="d2"   ---- reinitialization not possible
        console.log("Department2",this.name);
    }
    addEmployee(emp:string){
        this.employees.push(emp);
    }

    printemployInfo(){
        console.log(this.employees.length)
        console.log(this.employees)
        console.log(this.employees2)
    }
}





//!  inheritance
// Override properties and protected access modifier

class AccountingDepartment extends Department3 {
    // reports:string
    constructor(id:string,private reports:string[]) {
        super(id,"accounting");   
    }
     addReport(text:string){
        this.reports.push(text)
     }

     printReport(){
        console.log(this.reports)
     }

     // override
     addEmployee(emp: string): void {
        //  this.employees.push(emp);          private employees
         this.employees2.push(emp);    // protected
     }

     get getReports(){
        if(this.reports.length>0){
            return this.reports
        }
        throw new Error("report not found")
     }

     set setReports(value:string){
        if(!value){
            throw new Error("Please pass valid value");
        }
        this.reports.push(value)
     }
}

const acd=new AccountingDepartment("d1",[]);
acd.describe()
acd.addReport("inheri")
acd.printReport()
acd.addEmployee("mansbd")
acd.printemployInfo()

// setter and getter
console.log(acd.getReports) 
// acd.setReports("getter and setter");   error
acd.setReports="getter and setter";






// static method

class Department4{
   public name: string;
   private employees :string[];
   private readonly id:string
   protected employees2:string []

   constructor(id:string,n:string){
    this.name=n;
     this.id="d1"
     this.employees=[]
     this.employees2=[]
   }

    describe(this:Department4){ 
        // this.id="d2"   ---- reinitialization not possible
        console.log("Department2",this.name);
    }
    addEmployee(emp:string){
        this.employees.push(emp);
    }

    printemployInfo(){
        console.log(this.employees.length)
        console.log(this.employees)
        console.log(this.employees2)
    }

    static getSalary(){
        return {salary:500000}
    }
}


// direct access
const salary=Department4.getSalary()
console.log(salary)





//! abstract classes

abstract class Department5 {
  public name: string;
  protected readonly id: string;

  constructor(id: string, n: string) {
    this.name = n;
    this.id = id; // fixed
  }

  abstract describe(this: Department5): void;
  abstract displayName(): void;
}

class Subclass extends Department5 {
  constructor(id: string, private reports: string[]) {
    super(id, "account");
  }

  describe(): void {
    console.log("department 5", this.id);
  }

  displayName(): void {
    console.log(this.name);
  }
}

// Example usage:
const dep = new Subclass("d1", ["Report1", "Report2"]);
dep.describe();     // department 5 d1
dep.displayName();  // account
