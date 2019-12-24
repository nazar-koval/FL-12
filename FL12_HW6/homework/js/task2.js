// Your code goes here
let x = parseInt(prompt('','a'));
let y = parseInt(prompt('','b'));
let z = parseInt(prompt('','c'));
if (isNaN(x) || isNaN(y) || isNaN(z) === true){
    alert("Input values should be ONLY numbers!");
} else if(x===0 || y===0 || z===0 || x<0 || y<0 || z<0){
       alert("A triangle must have 3 sides with a positive definite length!"); 
    } else if(x+y < z || y+z < x || x+z < y){
            console.log('Triangle doesn’t exist!');
            alert("Triangle doesn’t exist!");
        } else if(x===y && y===z && x===z){
            console.log('Equilateral triangle!');
            } else if (x===y || y===z || x===z){
                console.log('Isosceles triangle!');
                } else if(x!==y && y!==z && x!==z){
                        console.log('Scalene triangle!')
                    }   