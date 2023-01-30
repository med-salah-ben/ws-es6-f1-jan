let people = [
    {name: "oussama" , age:20},
    {name:"ghada", age:22},
    {name:"khalil", age:16},
    {name:"chedli" , age:35}
];

// expression func
// let ageSum =people.filter(function(person){
//     return person.age >18 && person.age <30
// }).filter(function(person){
//     return person.name ==="oussama"
// }).map(function(person){
//     return person.age
// })
// console.log(ageSum)

//--------Arrow func--------//
let ageSum = people.filter(person=> person.age >18 && person.age<30)
            .filter((person)=>person.name==="ghada")
            .map(person=>person.name)
 console.log(ageSum)