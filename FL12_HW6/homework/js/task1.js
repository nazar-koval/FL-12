// Your code goes here
let x = parseInt(prompt('','a'));
let y = parseInt(prompt('','b'));
let z = parseInt(prompt('','c'));
if (isNaN(x) || isNaN(y) || isNaN(z) === true){
    console.log("Invalid input data!")
} else{
    let D = Math.pow(y,2) - 4*x*z;
    console.log("Dyskryminant = ", D);
    if(D<0){
        console.log("No solution!");
    } else if(D===0){
        let q = (-y + Math.sqrt(D)) / (2*x);
        console.log("x = ", q);
    } else{
        let q1 = (-y + Math.sqrt(D)) / (2*x);
        let q2 = (-y - Math.sqrt(D)) / (2*x);
        console.log("x1 = ", q1, "x2 = ", q2);
    }  
}
