"use strict"
// 1
function showChoice() {
    const select = document.getElementById("drinks");
    const selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue == "coffee") {
        alert("You have chosen cofee");
    } else if (selectedValue == "tea") {
        alert("You have chosen чай");
    } else if (selectedValue == "juice") {
        alert("You have chosen сік");
    }
}
// 2
function checkDay(){
    const dayType = document.getElementById('day').value;
    switch (dayType){
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        alert('Work day');
        break;
        case 'Saturday':
        case 'Sunday':
        alert('Weekend');
        break;
        default:
        alert('Day underfined');
        break;
    }
}
// 3
function checkMonth(){
    const monthType = document.getElementById('monthNum').value;
    switch (monthType){
        case '1':
        case '2':
        case '12':
        alert('Winter');
        break;
        case '3':
        case '4':
        case '5':
        alert('Spring');
        break;
        case '6':
        case '7':
        case '8':
        alert('Summer');
        break;
        case '9':
        case '10':
        case '11':
        alert('Autumn');
        break;
        default:
        alert('Month underfined');
        break;
    }
}
// 4
function checkMonthNum(){
    const monthLong = document.getElementById('monthDays').value;
    switch (monthLong){
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
        alert('31 days');
        break;
        case '4':
        case '6':
        case '9':
        case '11':
        alert('30 days');
        break;
        case '2':
        alert('28 or 29 days');
        break;
        default:
        alert('Month underfined');
        break;
    }
}
// 5
function checkColor(){
    const colorSymbol = document.getElementById('color').value;
    switch (colorSymbol){
        case 'Red':
            alert('Stop');
        break;
        case'Yellow':
            alert('Wait');
        break;
        case 'Green':
            alert('Go');
         break;
        case 'Blue':
            alert('Sad');
        break;
        case 'Pink':
            alert('Barbie');
        break;
        case'Purple':
            alert('Flowers');
        break;
        case 'White':
            alert('Light');
        break;
        case 'Black':
            alert('Darkness');
        break;
        case'Orange':
            alert('Fun');
        break;
        case 'Grey':
            alert('Stability');
        break;
        case 'Brown':
            alert('Comfort');
            break;
        default:
            alert('Your own colour?');
            break;
    }
    
}
// 6
function calculator(){
    const numFirst = parseFloat(document.getElementById('numOne').value);
    const numSecond = parseFloat(document.getElementById('numTwo').value);
    const symb = document.getElementById('symbols').value;
    if (symb === '+'){
        alert(numFirst + numSecond);
    }
    else if (symb === '-'){
        alert(numFirst - numSecond);
    }
    else if (symb === '*'){
        alert(numFirst * numSecond);
    }
    else if (symb === '/'){
        if (numSecond === 0){
            alert('You cannot devide to zero')
        }
        else{
            alert(numFirst / numSecond);
        }
    }
    else{
        alert('Operation underfined');
    }
}