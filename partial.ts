interface User1 {
    name: string;
    age: number;
    email: string;
    password: string;
    role: string;
}
type updateUsers = Pick<User1 , 'name'|'age'|'email'>
type Optional = Partial<updateUsers>
function updated(updateUser:Optional){
    
}