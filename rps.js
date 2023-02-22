let computer=document.getElementById('computer-choice'),
you=document.getElementById('you-choice'),
result=document.getElementById('the-result'),
stonebtn=document.getElementById('stone'),
paperbtn=document.getElementById('paper'),
sissorbtn=document.getElementById('cutter');

let opt=['stone','paper','cutter'];
let user_choice;


function result1(you1,computer){
    if(you1==computer){
        result.innerHTML='tie'
    }
    else if(computer=='stone'){
        if (you1=='paper'){
            result.innerHTML='win'
        }
        else {
        result.innerHTML='lose'
        }
    }
    else if(computer=='paper'){
        if(you1=='cutter'){
            result.innerHTML='win'
        }
        else{
            result.innerHTML='lose'
        }
    }
    else if(computer=='cutter'){
        if(you1=='stone'){
            result.innerHTML='win'
        }
        else{
            result.innerHTML='lose'
        }
    }
}
stonebtn.addEventListener('click',()=>{
    you.innerHTML='stone'
    user_choice='stone'
    let ai=opt[Math.floor(Math.random()*opt.length)]
    result1(user_choice,ai)
    computer.innerHTML=ai
})
paperbtn.addEventListener('click',()=>{
    you.innerHTML='paper'
    user_choice='paper'
    let ai=opt[Math.floor(Math.random()*opt.length)]
    result1(user_choice,ai)
    computer.innerHTML=ai
})
sissorbtn.addEventListener('click',()=>{
    you.innerHTML='cutter'
    user_choice='cutter'
    let ai=opt[Math.floor(Math.random()*opt.length)]
    result1(user_choice,ai)
    computer.innerHTML=ai
})
