interface Users {
    name: string;
    age: number;
    email: string;
    password: string;
    role: string;
}
type updateUser = Pick<Users , 'name'|'age'|'email'>
function update(updateUser:updateUser){
    console.log(`Name: ${updateUser.name},Age: ${updateUser.age},Email: ${updateUser.email}`)
}
update({name:'abc',age:123,email:'xyz'})