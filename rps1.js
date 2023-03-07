let computer_choice=document.getElementById('computer-choice');
let user_choice=document.getElementById('you-choice');
let result=document.getElementById('the-result');
let stone_btn=document.getElementById('stone');
let paper_btn=document.getElementById('paper');
let sissor_btn=document.getElementById('cutter');



let computer_data=["stone","paper","cutter"]
let ai;
let display=()=>{
    let ai=computer_data[Math.floor(Math.random()*computer_data.length)]
    computer_choice.innerHTML=ai
    return ai
}
let test_result= function(you,ai){
    if(you==ai){
        result.innerHTML='tie'
    }
    else if(ai=='stone'){
        if (you=='paper'){
            result.innerHTML='win'
        }
        else {
        result.innerHTML='lose'
        }
    }
    else if(ai=='paper'){
        if(you=='cutter'){
            result.innerHTML='win'
        }
        else{
            result.innerHTML='lose'
        }
    }
    else if(ai=='cutter'){
        if(you=='stone'){
            result.innerHTML='win'
        }
        else{
            result.innerHTML='lose'
        }
    }
}




stone_btn.addEventListener('click',()=>{
    user_choice.innerHTML="stone";
    user="stone";
    ai=display();
    test_result(user,ai);

});
paper_btn.addEventListener('click',()=>{
    user_choice.innerHTML="paper";
    user="paper";
    ai=display();
    test_result(user,ai);
});
sissor_btn.addEventListener('click',()=>{
    user_choice.innerHTML="cutter";
    user="cutter";
    ai=display();
    test_result(user,ai);

});
