function Person(name, job, age){
   Programmer.call(this, name, job, age);
    this.name = name;
    this.job = job ;
    this.age = age;
     this.exercise = function(){
         console.log(this.name + ' loves pushups. ');
     }
     this.fetchJob = function(){
         console.log(this.name + ' is a ' + this.job);
     }
}

function Programmer(language, busy){
    this.language = language;
    this.busy = busy;

this.AcceptNewTask = function(){
    this.busy = false; 
    if (this.busy === false ){
        console.log(this.name + ' can accept task ');
    } 
    else {
        console.log(this.name + ' can not accept task ');
   }
}
   this.CompleteTask = function(){
       this.busy = false;
       if(this.busy === true){
           console.log(this.name + ' has completed the task ');
       } else {
           console.log(this.name + ' has  not completed  the task ');
       }
   }
   this.offernewtask = function(){
       this.busy = true;
       if(this.busy === true){
           console.log(this.name + " can't accept a new task right now. ");
       } else {
           console.log(this.name + ' would love the responsibility of a new task ');
       }
       
   }
   this.learnLanguage = function(){
       this.language = [" C++", "Python", "C#"];
       console.log(this.name + ' is learning these languages' + this.language);
   }
   this.listLanguages = function(){
       this.language =[ 'HTML', 'CSS', "JAVA"];
       console.log(this.name + ' knows these languages' + this.language)
   }
}
 var Josh = new Person ('Josh', 'Engineer', '33');
Josh.exercise();
Josh.fetchJob();
Josh.CompleteTask();
Josh.offernewtask();
Josh.AcceptNewTask();
Josh.learnLanguage();
Josh.listLanguages();

