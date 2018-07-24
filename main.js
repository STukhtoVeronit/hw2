function Worker(firstName, lastName, salary){
    var _firstName = firstName;
    var _lastName = lastName;
    var _salary = salary;

    this.setFirstnName = function (firstName) {
        _firstName = firstName;
    };
    this.getFirstnName = function () {
        return _firstName;
    };

    this.setLastName = function (lastName) {
        _lastName = lastName;
    };
    this.getLastName = function () {
        return _lastName;
    };

    this.setSalary = function (salary) {
        _salary = salary;
    };
    this.getSalary= function () {
        return _salary;
    };

    this.setFullName =function (fullName){
        var  fullNameArr = fullName.split(' ');
        this.setFirstnName(fullNameArr[0]);
        this.setLastName(fullNameArr[1]);
    };

    this.displayInfo = function(){
        return "First name: " + _firstName + "; Last name: " + _lastName + "; salary: " + _salary;
    };
}

var workersArr=[];
workersArr.push(new Worker("Bob", "Lade", 500));
workersArr.push(new Worker("Jonathan", "Lade", 600));
workersArr[1].setFullName("Jon Lade");

workersArr.forEach(function (item) {
    console.log(item.displayInfo());
});

workersArr.forEach(function (item) {
    item.setSalary(item.getSalary()+item.getSalary()*0.1);
});

workersArr.forEach(function (item) {
    console.log(item.displayInfo());
});

var sumSalary = workersArr.reduce(function (sum, current) {
    return sum + current.getSalary();
}, 0);
console.log("Everage salary = " + sumSalary/workersArr.length);