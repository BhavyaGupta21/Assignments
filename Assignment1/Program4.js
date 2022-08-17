/* Program 4- Write a program to display student results. 
		If number above 90 then grade A
		If number above 70 and below 90 then grade B
If number above 50 and below 70 then grade C
If number below 50 then Fail */

let result = 50;

if(result > 90) {
    console.log("You have scored grade A");
} else if (result > 70 && result <= 90) {
    console.log("You have scored grade B");
} else if (result >= 50 && result <= 70) {
    console.log("You have scored grade C");
} else {
    console.log("Fail");
}
