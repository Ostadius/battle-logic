import Job from './Job';

export default class Rogue extends Job{
  constructor(name,lvl,hp,str,dex,mag,con,moon,talent,glyph,dagger='none',cloak='none',sneaks='none',
  vial='none',buff=false,buffName='Shadowmeld',specAtk1='Backstab',text=''){
    super(name,lvl,hp,str,dex,mag,con,moon,talent,glyph)
    this.dagger=dagger;
    this.cloak=cloak;
    this.sneaks=sneaks;
    this.vial=vial;
    this.buff=buff;
    this.buffName=buffName;
    this.specAtk1=specAtk1;
    this.text=text;
  }
  special1=()=>{
    let dmg =Math.floor(this.dex *2);
    this.text = 'is about to do stab a sucka to deff.... it did';
    return dmg;
  }
  bleedingEdge=()=>{
    let newHp = this.hp - 4;
    this.text = 'sharpens the blade with blood';
      return newHp;
  }
  toggleBuff=()=>{

    return this.buff = !this.buff;
  }

  buffEffect=(t)=>{

      if(t){
      this.text = `melding into the shadows...`;
      return this.str +=20, this.dex +=30
    } else if(!t){
      this.text = `emerges from the darkness`;
        return this.str -=20, this.dex -=30;
      } else {
        return this.str = 5, this.dex = 5;
      }
    }
    }
