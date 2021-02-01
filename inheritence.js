// ES6 OPP core concepts Inhertance
class Parent{
    constructor() {
        this.fatherName = "Kafi Abdullah";
    }
}


class Child extends Parent {
    constructor(name){
        super();
        this.childName = name;
    }
    getFullName(){
       return this.childName + " " + this.fatherName;
    }
}

const baby = new Child("shafin");
const baby2 = new Child("abiha");
console.log(baby.getFullName());
console.log(baby2);