import Job from './Job';

export default class Scribe extends Job{
  constructor(name,lvl,hp,str,dex,mag,con,moon,talent,glyph,script='none',robe='none',sandals='none',orb='none'){
    super(name,lvl,hp,str,dex,mag,con,moon,talent,glyph)
    this.script=script;
    this.robe=robe;
    this.sandals=sandals;
    this.orb=orb;
  }

}
