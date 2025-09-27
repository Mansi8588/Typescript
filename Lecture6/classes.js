var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ! Basic class
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    // describe(){
    //     console.log("Department",  this.name);
    // }
    Department.prototype.describe = function () {
        console.log("Department", this.name);
    };
    return Department;
}());
var account = new Department("mansi");
account.describe();
var accountCopy = {
    name: "rai",
    describe: account.describe // no object undefine output
};
accountCopy.describe();
// Access Modifier  
var Department2 = /** @class */ (function () {
    //  constructor(public name :string,private employees:string[]){
    //     }
    function Department2(n) {
        this.name = n;
        this.employees = [];
    }
    Department2.prototype.describe = function () {
        console.log("Department2", this.name);
    };
    Department2.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department2.prototype.printemployInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department2;
}());
var account2 = new Department2("rai");
account2.describe();
account2.addEmployee("ambuj");
// account2.employees=["sdt"]     bug
account2.printemployInfo();
// Readonly
var Department3 = /** @class */ (function () {
    function Department3(id, n) {
        this.name = n;
        this.id = "d1";
        this.employees = [];
        this.employees2 = [];
    }
    Department3.prototype.describe = function () {
        // this.id="d2"   ---- reinitialization not possible
        console.log("Department2", this.name);
    };
    Department3.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department3.prototype.printemployInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
        console.log(this.employees2);
    };
    return Department3;
}());
//!  inheritance
// Override properties and protected access modifier
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    // reports:string
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "accounting") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReport = function () {
        console.log(this.reports);
    };
    // override
    AccountingDepartment.prototype.addEmployee = function (emp) {
        //  this.employees.push(emp);          private employees
        this.employees2.push(emp); // protected
    };
    Object.defineProperty(AccountingDepartment.prototype, "getReports", {
        get: function () {
            if (this.reports.length > 0) {
                return this.reports;
            }
            throw new Error("report not found");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "setReports", {
        set: function (value) {
            if (!value) {
                throw new Error("Please pass valid value");
            }
            this.reports.push(value);
        },
        enumerable: false,
        configurable: true
    });
    return AccountingDepartment;
}(Department3));
var acd = new AccountingDepartment("d1", []);
acd.describe();
acd.addReport("inheri");
acd.printReport();
acd.addEmployee("mansbd");
acd.printemployInfo();
// setter and getter
console.log(acd.getReports);
// acd.setReports("getter and setter");   error
acd.setReports = "getter and setter";
// static method
var Department4 = /** @class */ (function () {
    function Department4(id, n) {
        this.name = n;
        this.id = "d1";
        this.employees = [];
        this.employees2 = [];
    }
    Department4.prototype.describe = function () {
        // this.id="d2"   ---- reinitialization not possible
        console.log("Department2", this.name);
    };
    Department4.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department4.prototype.printemployInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
        console.log(this.employees2);
    };
    Department4.getSalary = function () {
        return { salary: 500000 };
    };
    return Department4;
}());
// direct access
var salary = Department4.getSalary();
console.log(salary);
//! abstract classes
var Department5 = /** @class */ (function () {
    function Department5(id, n) {
        this.name = n;
        this.id = id; // fixed
    }
    return Department5;
}());
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass(id, reports) {
        var _this = _super.call(this, id, "account") || this;
        _this.reports = reports;
        return _this;
    }
    Subclass.prototype.describe = function () {
        console.log("department 5", this.id);
    };
    Subclass.prototype.displayName = function () {
        console.log(this.name);
    };
    return Subclass;
}(Department5));
// Example usage:
var dep = new Subclass("d1", ["Report1", "Report2"]);
dep.describe(); // department 5 d1
dep.displayName(); // account
