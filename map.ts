interface data{
    name:string;
    age:number;
}
const value = new Map<string, data>();

value.set('abc',{name:'abc',age:12});
value.set('xyz',{name:'xyz','age':24})

console.log(value.get('abc'));