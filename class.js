// JavaScript ES6 class method
class Students {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.university = "Southeast University";
    }
}

const student1 = new Students(27, "kafi");
const student2 = new Students(22, "kazi");
console.log(student1, student2);