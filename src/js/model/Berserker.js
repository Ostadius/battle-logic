import Job from './Job';

export default class Berserker extends Job{
  constructor(name,lvl,hp,str,dex,mag,con,moon,talent,glyph,hatchets='none',pauldrons='none',greaves='none',gutter='none',
  buff=false,buffName='Frenzy',specAtk1='Barrage',text=''){
    super(name,lvl,hp,str,dex,mag,con,moon,talent,glyph)
    this.hatchets=hatchets;
    this.pauldrons=pauldrons;
    this.greaves=greaves;
    this.gutter=gutter;
    this.buff=buff;
    this.buffName=buffName;
    this.specAtk1=specAtk1;
    this.text=text;
  }
  special1=()=>{
    let dmg = Math.floor(this.str + (this.dex/3));
    this.text= 'is about to do some damage *rawr rawr*...it did';
    return dmg;
  }
  toggleBuff =()=>{
    return this.buff =!this.buff;
  }

  buffEffect=(t)=>{

      if(t){
        this.text='entering a frenzied state';
      return this.str +=30, this.dex +=10
    }

      else if(!t){
        this.text = 'calming down...';
        return this.str -=30,this.dex -=10;
      }
    }

}
