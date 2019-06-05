'use strict';
const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query){
    for(let i=0; i<this.store.heroes.length;i++){
      let notYourHero=0;
      let hero=this.store.heroes[i];
      for(let key in query){
        if(hero[key]!==query[key]){
          notYourHero=1;
          break;
        }
      }
      if(!notYourHero){
        console.log(hero);
        return hero;
      }
    }
    console.log(null);
    return null;
  }

};

Database.findOne({ id: 2 });
Database.findOne({ id: 1 });
Database.findOne({ id: 10 });
Database.findOne({ id: 2, name: 'Aquaman' });
Database.findOne({ id: 5, squad: 'Justice League' });
Database.findOne({ squad: 'Justice League' });