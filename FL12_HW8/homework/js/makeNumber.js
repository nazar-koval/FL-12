function makeNumber(arr){
    let myarr = arr.split('').filter(num => !isNaN(num)).join('');
    return myarr;   
}
makeNumber('erer384jjjfd123'); 
makeNumber('123098h76gfdd'); 
makeNumber('ijifjgdj'); 