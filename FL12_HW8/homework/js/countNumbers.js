function makeNumber(arr){
    let myarr = arr.split('').filter(num => !isNaN(num)).join('');
    return myarr;   
}
function countNumbers(arr){
    let count = new Object();
    let func = makeNumber(arr); 
    for(let i=0; i < func.length; i++){
    if (count[func[i]]) {
        count[func[i]] += 1;
      } else {
        count[func[i]] = 1;
      }
    }
  return count;
}
countNumbers("erer384jj4444666888jfd123");
countNumbers("jdjjka000466588kkkfs662555");