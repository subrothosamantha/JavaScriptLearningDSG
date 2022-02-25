

const User = {
    email:'putin@gmail.com',
    PersonalInformaion : {
           name: 'Virdaman Putin',
           Address :{
               Country : 'Russia',
               State: 'Maxico'
           }
    }
}
//accessing values inside js
let {PersonalInformaion : {Address}} = User;

console.log(Address.State);

