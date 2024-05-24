const img = document.getElementsByClassName("img1");
let score = document.getElementsByTagName("p");
let main = document.getElementsByTagName("span");
let btn = document.getElementsByClassName("btn");

let comp = score[0].innerText;
let human = score[1].innerText;

//rock = 0 paper = 1 scissors =2

function generate(){
    let x = Math.floor(Math.random() * 3);
    return x;
}

img[0].onclick = ()=>{
    let guess = generate();
    console.log(guess);
    if(guess == 1){
        human++;
        score[0].innerText = human;
        main[0].innerText = "Player's Point";
    }
    else if(guess==0){
        main[0].innerText = "Draw";
    }
    else{
        comp++;
        score[1].innerText = comp;
        main[0].innerText = "Computer's Point";
    }
}

img[1].onclick = ()=>{
    let guess = generate();
    console.log(guess);
    if(guess == 1){
        main[0].innerText = "Draw";
    }
    else if(guess==0){
        comp++;
        score[1].innerText = comp;
        main[0].innerText = "Computer's Point";
    
    }
    else{
        human++;
        score[0].innerText = human;
        main[0].innerText = "Player's Point";
    }
}


img[2].onclick = ()=>{
    let guess = generate();
    console.log(guess);
    if(guess == 1){
        comp++;
        score[1].innerText = comp;
        main[0].innerText = "Computers Point";
    }
    else if(guess==2){
        main[0].innerText = "Draw";
    }
    else{
        human++;
        score[0].innerText = human;
        main[0].innerText = "Player's Point";
    }
}

btn[0].onclick = () =>{
    human = 0;
    comp = 0;
    score[0].innerText = "0";
    score[1].innerText = "0";
    main[0].innerText = "Let's start the Game";
}

