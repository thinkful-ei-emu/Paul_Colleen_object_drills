'use strict';
function createChar (name=0, nickname=0, race=0, origin=0, attack=0, defense=0, weapon=0){
  return {
    name, 
    nickname, 
    race, 
    origin, 
    attack, 
    defense,
    weapon,
    describe:function(){
      console.log(`${name} is a ${race} from ${origin} who uses a ${weapon}.`);
    },
    evaluateFight: function(chaR){
      let x=Math.max(this.attack-chaR.defense,0);
      let y=Math.max(chaR.attack-this.defense,0);
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
    }
  };
}

let charList=[
  createChar('Frodo','the Brave','Hobbit','the Shire', '4','1'),
  createChar('Sam','the Honest','Hobbit','the Shire', '3','3'),
  createChar('Gandalf','the Plot Device/Self-insert','Wizard','the Dasdjkh', '10','4'),
  createChar('Aragorn','aragorn','Human','Gondor', '6','8'),
  createChar('Legolas','the Bloom','Elf','Swamps', '2','5')
];

charList[3].evaluateFight(charList[4]);

charList.push(createChar('Arwen','the Love Interest','Half-elf','Swamps', '12','9'));

charList.find((currentobj)=> (currentobj.nickname==='aragorn')?true:false
).describe();

let newCharList= charList.filter((currentobj)=> currentobj.race==='Hobbit'?true:false);
//console.log(newCharList);

newCharList= charList.filter((currentobj)=> currentobj.attack>=5?true:false);
//console.log(newCharList);
