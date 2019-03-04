class Worker{

    getName(){
        return this.name;
    }
    getSurname(){
        return this.surname;
    }
    getRate(){
        return this.hourRate;
    }
    getHours(){
        return this.hours;
    }
    

    constructor(name,surname,hourRate,hours){
        this.name=name;
        this.surname=surname;
        this.hourRate=hourRate;
        this.hours=hours;
    }
     getsalary(){
         return (this.getRate()*this.getHours()); 
     }
     afis(){
        console.log("Name "+this.getName());
        console.log("Surname "+this.getSurname());
        console.log("Hour Rate "+this.getRate());
        console.log("Hour"+this.getHours());
        console.log("Salary "+this.getsalary());
        this.increaseSalary(2);
        console.log("Salary Increase "+this.getsalary());
        this.setTax(18);
        console.log("Salary Netto "+this.getSalaryNetto());
        console.log("---------------------------");
     }
     increaseSalary(sal){
         this.hourRate+=2;
     }
     setTax(tax){
         this.tax=1-tax/100;
     }
     getSalaryNetto(){
         return (this.getsalary()*this.tax);
     }

}

var a=new Array();

let worker = new Worker("Ion","Creanga",10,176);
a.push(worker);
//worker.afis();
let worker1 = new Worker("Joric","Arde",53,455);
a.push(worker1);
//worker1.afis();
let worker2 = new Worker("Vasile","Munteanu",16,54);
a.push(worker2);
//worker2.afis();

if(worker.getsalary()>worker1.getsalary()){
    if(worker.getsalary()>worker2.getsalary())console.log("Ion are salariu mai mare");
    else console.log("Vasile are salariu mai mare");
}
else{
    if(worker1.getsalary()>worker2.getsalary())console.log("Joric are salariu mai mare");
    else console.log("Vasile are salariu mai mare");
}

for(i=0;i<a.length;i++){
    a[i].afis();
}