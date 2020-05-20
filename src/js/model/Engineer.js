import Job from './Job';

export default class Engineer extends Job{
  constructor(name,lvl,hp,str,dex,mag,con,moon,talent,glyph,pistol='none',shirt='none',boots='none',trap='none'){
    super(name,lvl,hp,str,dex,mag,con,moon,talent,glyph)
    this.pistol=pistol;
    this.shirt=shirt;
    this.boots=boots;
    this.trap=trap;
  }

}
