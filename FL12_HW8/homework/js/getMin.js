function getMin(...arr){
    let c = Infinity;
    for(let i=0; i<arr.length; i++){
        if (arr[i] < c){
            c = arr[i];
        } 
    } 
    return c;
}
getMin(3, 0, -3);