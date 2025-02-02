let boxes=document.querySelectorAll(".box");
let rbtn=document.querySelector("#btn");
let newbtn=document.querySelector("#newgame");
let msg=document.querySelector("#new");
let msgc=document.querySelector(".hide");
let t0=true;
 const winner=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 boxes.forEach((box)=> {
    box.addEventListener("click",() =>{
        if(box.innerText===""){
       if(t0){
        box.innerText="O";
        box.style.color="blue";
        t0=false;
       }
       else{
        box.innerText="X";
        box.style.color="red";
        t0=true;
       }
       Winner();
    }
    });
 });

 const showWinner=(winner)=>
 {
    msg.innerText=`Congratulations! ,Winner is ${winner}`;
    msgc.classList.remove("hide");
 }

 const Winner=()=>
 {
   let isDraw=true;
    for(let pattern of winner){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
    if(pos1==pos2 && pos2===pos3){
      console.log("Winner");
      showWinner(pos1);
   return;}
    }
    boxes.forEach((box)=>{
      if(box.innerText==="")
         isDraw=false;
    });
    
    if(isDraw)
    {
      msg.innerText="Game Draw Strat the New Game";
      msgc.classList.remove("hide");
    }
    }
 }

 rbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    });
    t0=true;
    msgc.classList.add("hide");
 });
 newbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    });
    t0=true;
    msgc.classList.add("hide");
 });
