let orange = document.getElementsByClassName('.btn1')
let blue = document.getElementsByClassName('.btn2')


function changeColor(color){
    if(color === 'orange'){
        document.body.style.backgroundColor="orange"
    }else if (color === 'blue'){
        document.body.style.backgroundColor="blue"
    }

}