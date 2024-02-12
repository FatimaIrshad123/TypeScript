
function Greeting(firstName : String){
    console.log('Hello ' + firstName)
}
// Greeting('Fatima')

function Sum(num1:number,num2: number){
    return num1 + num2
}
// console.log(Sum(12,23))

function runAfter1s(fn : () => void){
    setTimeout(fn,1000)
}
runAfter1s(function(){
    // console.log('Hi There')
})
interface User  {
    firstName : String,
    email ?: String,
    age : number
}

function isLegal(user : User){
    if (user.age > 18){
        return true
    }else{
        return false
    }
}
// console.log(isLegal({firstName:'Fatima',age:20}))

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
let x = new Employee('Fatima',18)

console.log(x)