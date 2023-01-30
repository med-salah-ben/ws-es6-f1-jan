//1- assigning array items to variables
// let [a,b,c]= [123 , "first" , false]
// console.log(c);
// let x = [123 , "first" , false];
// let [a,b,c] = x
// let [,e] = x
// console.log(e)
// let [ , ,y] = [5 , 'hello' , true]
// console.log(y)

// assigning the first and second value and storing the rest together
// let [a,b,...rest] = [365 , "Zero" , true , "gomycode",55 ,false]
// console.log(a)
// console.log("b : " , b)
// console.log("rest : ", rest);


// swapping Variables = Change It

let x = true ;
let y = false ;
[x,y] = [y ,x];
console.log(x)
