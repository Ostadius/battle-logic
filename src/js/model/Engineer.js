import Job from './Job';

export default class Engineer extends Job{
  constructor(name,lvl,hp,str,dex,mag,con,moon,talent,glyph,pistol='none',shirt='none',boots='none',trap='none',
  buff=false,buffName='Zoom',specAtk1='Snipe',text=''){
    super(name,lvl,hp,str,dex,mag,con,moon,talent,glyph)
    this.pistol=pistol;
    this.shirt=shirt;
    this.boots=boots;
    this.trap=trap;
    this.buff=buff;
    this.buffName=buffName;
    this.specAtk1=specAtk1;
    this.text=text;
  }
  special1=()=>{
    let dmg =Math.floor(this.mag *2);
    this.text = 'the scope focuses....*BLAM*..it did';
    return dmg;
  }
  elecTrap=()=>{
    let newHp = this.hp - 4;
    this.text = ' sets the trap.';
      return newHp;
  }
  toggleBuff=()=>{

    return this.buff = !this.buff;
  }

  buffEffect=(t)=>{

      if(t){
      this.text = `turns on the scope`;
      return this.str +=20, this.dex +=30
    } else if(!t){
      this.text = `switches off the scope`;
        return this.str -=20,this.dex -=30;
      } else {
        return this.str = 5 ,this.dex = 5;
      }
    }

}
