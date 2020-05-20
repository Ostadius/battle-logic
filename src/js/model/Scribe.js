import Job from './Job';

export default class Scribe extends Job{
  constructor(name,lvl,hp,str,dex,mag,con,moon,talent,glyph,script='none',robe='none',sandals='none',orb='none',
  buff=false,buffName='Focus',specAtk1='Burst',text=''){
    super(name,lvl,hp,str,dex,mag,con,moon,talent,glyph)
    this.script=script;
    this.robe=robe;
    this.sandals=sandals;
    this.orb=orb;
    this.buff=buff;
    this.buffName=buffName;
    this.specAtk1=specAtk1;
    this.text=text;
  }
  special1=()=>{
    let dmg =Math.floor(this.mag *2);
    this.text = 'the air crackles and then BURSTS';
    return dmg;
  }
  mindMelt=()=>{
    let newHp = this.hp - 4;
    this.text = 'sharpens the blade with blood';
      return newHp;
  }
  toggleBuff=()=>{

    return this.buff = !this.buff;
  }

  buffEffect=(t)=>{

      if(t){
      this.text = `focuses...*calculated*`;
      return this.str +=20, this.dex +=30
    } else if(!t){
      this.text = `relaxes the mind...`;
        return this.str -=20,this.dex -=30;
      } else {
        return this.str = 5, this.dex = 5;
      }
    }

}
