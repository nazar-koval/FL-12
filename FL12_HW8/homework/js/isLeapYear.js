function isLeapYear(date){
    let conclusion = '';
    let year = new Date(date).getFullYear();
    if ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)){
        conclusion = `${year} is a leap year`;
    } else if (!year){
        conclusion = 'Invalid Date';
    } else {
        conclusion = `${year} is not a leap year`
    }
    return conclusion;
}
isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);