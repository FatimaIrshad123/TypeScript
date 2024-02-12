type input = string | number;

function firstele<T>(arr : T[]){
    return arr[0]
}

let value = firstele<string>(['fatima','abc'])
console.log(value.toUpperCase())
let value1 = firstele<number>([1,2,3])
console.log(value1)