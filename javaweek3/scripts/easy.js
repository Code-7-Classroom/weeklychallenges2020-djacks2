var jogging = exercise('jogging');
var jumping = exercise('jumping jacks');

function exercise(x){
     return function(){
       return  "Today's exercise is " + x ;
     }
}



console.log(jogging()); 

console.log(jumping()); 

