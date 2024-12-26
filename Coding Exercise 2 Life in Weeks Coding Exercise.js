function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var lifeLimit = 90;

    var yearsLeft = lifeLimit - age;
    
    var ageInDays = yearsLeft * 365;
    var ageInWeeks = yearsLeft * 52;
    var ageInMonths = yearsLeft * 12;
    


    
    console.log(`You have ${ageInDays} days, ${ageInWeeks} weeks, and ${ageInMonths} months left.`);

    
    
    
    
    
    
/*************Don't change the code below**********/
}

lifeInWeeks(56);