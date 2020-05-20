import Job from './model/Job';
import Rogue from './model/Rogue';
import Berserker from './model/Berserker';
import Scribe from './model/Scribe';
import Engineer from './model/Engineer';
import { elements } from './view/base';

// base.js => Elements
let newGame, create,createCount,player1,player2,turn1,turn2,
turnCount,player1hp,player2hp,player1name,player2name,
battleReady,rogue,berserker,engineer,scribe,other,statParameters =[],classes,newGameAlert,radioChoice,nameChoice,navbar,navTop,newGameBar;
console.log('log');
newGameAlert = false;
navTop = elements.navbar.offsetTop;
elements.atk1.disabled=true;
elements.atk2.disabled=true;
elements.buff1.disabled=true;
elements.buff2.disabled=true;
elements.hpCheck1.disabled = true;
elements.hpCheck2.disabled = true;
elements.newGame.disabled = true;
elements.newGameBar.disabled= true;
createCount=0;


const init =()=>{
  if(elements.newGame.classList.contains('newgame-alert')) elements.newGame.classList.toggle('newgame-alert');
  createCount=0;
  battleReady =true;
  turn1=0;
  turn2=0;
  turnCount=0;//  implement turn counter
  player1hp = player1.hp; //placeholder static hp, replace with dynamic hp
  player1name=player1.name;
  player2hp = player2.hp; // placeholder static hp, replace with dynamic hp
  player2name=player2.name;
  elements.displayhp1.textContent=player1hp;
  elements.displayhp2.textContent=player2hp;
  elements.updatehp1.textContent=player1hp;
  elements.updatehp2.textContent=player2hp;
  elements.special1.textContent=player1.specAtk1;
  elements.special2.textContent=player2.specAtk1;
  elements.newGame.disabled = false;
  elements.newGameBar.disabled = false;
  elements.atk1.disabled=false;
  elements.atk2.disabled=false;
  elements.buff1.disabled=false;
  elements.buff1.textContent=player1.buffName;
  elements.buff2.disabled=false;
  elements.buff2.textContent=player2.buffName;
  player1.buff = false;
  player2.buff = false;
  elements.hpCheck1.disabled = false;
  elements.hpCheck2.disabled = false;
  elements.battleMessage.textContent=`Battle initiated between ${player1name} and ${player2name}`;
  console.log(`Battle initiated between ${player1name} and ${player2name}`);
}

// const stickyBar = () =>{
//   if (window.scrollY >= navTop) {
//     // nav offsetHeight = height of nav
//     console.log(navTop + " is navtop");
//     console.log('scrollY ? ' +scrollY);
//     document.body.classList.add('fixed-nav');
//   } else {
//     document.body.classList.remove('fixed-nav');
//   }
//
// }
//Battle Logic



//Character create function, make stats dynamic somehow
const createFunction =()=>{

  createCount+=1;
  console.log(createCount);
  radioChoice = document.querySelector('input[name="job"]:checked').value;
  nameChoice = document.querySelector('.input-name').value;
  console.log(nameChoice);

  switch (radioChoice) {
    case 'rogue':
    rogue =new Rogue(`${nameChoice}`,2);
    createCount === 1 ?player1=rogue :player2=rogue;
    console.log(rogue);
    break;
    case 'berserker':
    berserker =new Berserker(`${nameChoice}`,2);
    createCount === 1 ?player1=berserker :player2=berserker;
    console.log(berserker);
    break;
    case 'engineer':
    engineer =new Engineer(`${nameChoice}`,2);
    createCount === 1 ?player1=engineer :player2=engineer;
    console.log(engineer);
    break;
    case 'scribe':
    scribe =new Scribe(`${nameChoice}`,2);
    createCount === 1 ?player1=scribe :player2=scribe;
    console.log(scribe);
    break;
    case 'other':
    other =new Job(`${nameChoice}`,2)
    createCount === 1 ?player1=other :player2=other;
    console.log(other);
    break;
  }
  document.querySelector('.input-name').value = "";
  if(createCount===2){
    elements.createBtn.disabled = true;
    elements.inputField.disabled=true;

    init();
  }

}

// Battle is done...function
const battleDone = ()=>{
  player2hp <= 0 ? elements.updatehp2.textContent=`${player2name} is dead`:
  player1hp <= 0 ? elements.updatehp1.textContent=`${player1name} is dead`: null;
  elements.battleMessage.textContent='Battle is over, you wanna go again?';
  let disableButtons =document.querySelectorAll('button');
  disableButtons.forEach((disButton) => {
  let buttDis = document.getElementById('act-button');
  classes =disButton.classList;
  if(classes.contains("act")){
    console.log(classes +' is disabled');
    disButton.disabled =true;
    }else if(classes.contains("pass")){
      console.log("hp buttons");
    }else{
      classes.add("newgame-alert");
      newGameAlert=true;
      // 145
      console.log("NEW GAME   " +classes);
    }

  });
  battleReady=false;
}

// document.querySelector(`[date-itemid=""${id}]""`);

// eventlisteners
//New Game


[elements.newGame,elements.newGameBar].forEach(event=>event.addEventListener('click',()=>{
  if(player1.buff) player1.buffEffect(false); console.log(player1.str);
  if(player2.buff) player2.buffEffect(false); console.log(player2.str);
  init();
  elements.createBtn.disabled = false;
  elements.inputField.disabled = false;
}));

// normal attack
[elements.atk1,elements.atk2].forEach(event=>event.addEventListener('click',()=>{
  if(battleReady){
    let atkPower1 = player1.normalAtk();
    let atkPower2 = player2.normalAtk();
    let eCond = event.textContent;
    //normal attack conditions
    eCond === 'Attack p1' ? player2hp -= atkPower1 : player1hp -= atkPower2
    eCond === 'Attack p1' ? elements.updatehp2.textContent = player2hp : elements.updatehp1.textContent = player1hp
    elements.battleMessage.textContent=`
    ${ eCond === 'Attack p1' ? player1name : player2name}
    is about to do a normal attack...it did ${eCond === 'Attack p1' ? atkPower1 : atkPower2} damage
    `;
    if(player2hp <= 0 || player1hp <= 0)battleDone();
  }}));
elements.hpCheck1.addEventListener('click',()=>{
    console.log(player1hp);
  });
elements.hpCheck2.addEventListener('click',()=>{
    console.log(player2hp);
  });

  //special atk1 for both players
  [elements.special1,elements.special2].forEach(event => event.addEventListener('click',()=>{
    if(battleReady){
      console.log(event.classList[0]);
      let specAtkP1 = player1.special1();
      let specAtkP2 = player2.special1();
      let eCond = event.classList[0];
      console.log(eCond);
      //normal attack conditions
      eCond === 'p1-special' ? player2hp -= specAtkP1 : player1hp -= specAtkP2
      eCond === 'p1-special' ? updatehp2.textContent = player2hp : updatehp1.textContent = player1hp
      elements.battleMessage.textContent=`
      ${ eCond === 'p1-special' ? player1name : player2name}
      ${ eCond === 'p1-special' ? player1.text : player2.text} ${eCond === 'p1-special' ? specAtkP1 : specAtkP2} damage
      `;
      if(player2hp <= 0 || player1hp <= 0){
        battleDone();
        battleReady=false;
      }
    }

  }));
//Battle Logic
//p1 / p2 buff
  // [buff1,buff2].forEach(event => event.addEventListener('click',()=>{
  //   let buffCond  = event.classList[0];
  //   console.log(buffCond);
  //   buffCond === 'p1-buff' ? player1.buffEffect(toggleBuffP1) : player2.buffEffect(toggleBuffP2);
  //   buffCond === 'p1-buff' ? console.log(player1.str) : console.log(player2.str);
  //
  //   console.log(player1.buff);
  //   console.log(player2.buff);
  //   if(player1.buff){
  //     elements.battleMessage.textContent=`${player1name} is ${player1.buffText(player1.buff)}`;
  //     special1.disabled =false;
  //   } else if(player2.buff){
  //     elements.battleMessage.textContent=`${player2name} is is ${player2.buffText(player2.buff)}`;
  //     special2.disabled =false;
  //   } else if(!player1.buff){
  //     elements.battleMessage.textContent=`${player1name} is ${player1.buffText(player1.buff)}`;
  //     special1.disabled =true;
  //   } else if(!player2.buff){
  //     elements.battleMessage.textContent=`${player2name} is ${player2.buffText(player2.buff)}`;
  //     special2.disabled =true;
  //   }
  //
  // }));
  // player1 buff1
elements.buff1.addEventListener('click',()=>{
  console.log('player 1 ' + player1.buff);
  console.log('player 2 ' + player2.buff);
  player1.buffEffect(player1.toggleBuff());

    if(player1.buff){
      elements.battleMessage.textContent=`${player1name} is ${player1.text}`;
      // buff1.textContent = 'Boo!';
      special1.disabled =false;
    } else{
      // buff1.textContent = `${player1.buffName}`;
      special1.disabled =true;
      elements.battleMessage.textContent=`${player1name} is ${player1.text}`;

    }
  })
  //player2 buff1
  elements.buff2.addEventListener('click',()=>{
    console.log('player 1 ' + player1.buff);
    console.log('player 2 ' + player2.buff);
      player2.buffEffect(player2.toggleBuff());

      if(player2.buff){
        elements.battleMessage.textContent=`${player2name} is is ${player2.text}`;
        // buff2.textContent = 'Calm down';
        special2.disabled =false;

      } else  {
        // buff2.textContent = player2.buffName;
        elements.pecial2.disabled =true;
        elements.battleMessage.textContent=`${player2name} is is ${player2.text}`;

      }
    })
  // document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');


  elements.createBtn.addEventListener("click",createFunction);
  // window.addEventListener('scroll',stickyBar)
  window.onload = function() {
   setTimeout (()=> {
    scrollTo(0,0);
  }, 300); //100ms for example
  }
