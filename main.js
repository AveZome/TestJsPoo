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
         return (this.hourRate*this.hours); 
     }
     afis(){
        console.log(this.name);
        console.log(this.surname);
        console.log(this.hourRate);
        console.log(this.hours);
        console.log(this.getsalary());
     }
}

let worker = new Worker("Ion","Creanga",10,176);
worker.afis();
let worker1 = new Worker("Joric","Arde",53,455);
worker1.afis();
let worker2 = new Worker("Vasile","Munteanu",16,54);
worker2.afis();

if(worker.getsalary()>worker1.getsalary()){
    if(worker.getsalary()>worker2.getsalary())console.log("Ion are salariu mai mare");
    else console.log("Vasile are salariu mai mare");
}
else{
    if(worker1.getsalary()>worker2.getsalary())console.log("Joric are salariu mai mare");
    else console.log("Vasile are salariu mai mare");
}
