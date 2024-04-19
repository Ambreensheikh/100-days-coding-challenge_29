//Default export used with single entity
export default function greet(){
    console.log(`Hello , World !`);
}
//named exports are useful for multiple entities 
const name = "Hashir";
const age = 12;
function greet(){
    console.log(`hello , name`);
}
export{name , age , greet};