VAR
function testVar(){
    var x = 10 ;
    if(true){
        var x =11;
        console.log("inBlock : " , x)
    }
    console.log(x)
}
testVar();

LET

function testLet(){
    let x = 10 ;
    if(true){
        let x =11;
        console.log("inBlock let : " , x)
    }
    console.log("Out Of Block : ",x)
}
testLet();

Const
// premitive Data 
const x = 10 ;
x = 12 ;
console.log(x)
// non premitive Data 
const obj = {}
console.log(obj.name = "Ghada")
console.log(obj)
obj.age = 18
console.log(obj)

const arr  = [];
arr.push("chedli")
console.log(arr)
arr.unshift("oussama")
console.log(arr)
arr.shift();
console.log(arr)