class car{
    constructor(color : string , location : string , vin : number|string){
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    color : string;
    location : string;
    owner ?: string;
    readonly vin : string | number ;
}

class Mercedes extends car{
    constructor(color:string,location:string,
        vin:number,alloywheel:boolean){
        super(color,location,vin)
        this.alloywheel = alloywheel;
    }
    alloywheel : boolean;
    adjustable = true;
}

let carinfo = new Mercedes('silver','london',12,false);
let carinfo1 = new car('red','pakistan','abc');
let carinfo2 = new car('blue','india','xyz');

console.log(carinfo);
console.log(carinfo1);
console.log(carinfo2);