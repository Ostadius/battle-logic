
export default class Job {
  constructor(name,lvl,hp=500,str=5,dex=5,mag=5,con=5,moon='unknown',talent=0,glyph='none'){
    this.name=name;
    this.lvl=lvl;
    this.hp=hp;
    this.str=str;
    this.dex=dex;
    this.mag=mag;
    this.con=con;
    this.moon=moon;
    this.talent=talent;
    this.glyph=glyph;
  }


  normalAtk(){
    let dmg =this.str + this.lvl + ( this.dex*0.5)
    return dmg;
  }
   hpTot(){
     let newHp =this.con + this.lvl+ this.hp;
     this.hp =+ newHp;
    console.log(this.hp);
    return newHp;
  }
}
