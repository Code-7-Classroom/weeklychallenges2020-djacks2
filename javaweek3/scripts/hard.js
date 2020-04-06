

 var info = (function person(){
    pii = { 
      name: 'John',
      ssn :'45-74-1897'
    };
    return public = {
        getName : function getName(){
        return pii.name;
        }
    };

})();

alert(info.getName());
alert(info.ssn);
