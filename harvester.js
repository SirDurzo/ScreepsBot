module.exports = function (creep) {
 
 var sources = creep.room.find(FIND_SOURCES);
 
 if (typeof creep.room.memory.sources === 'undefined'){
 
  creep.room.memory.sources = [];
  for (var i in sources){
    console.log(sources[i]);  
    creep.room.memory.sources.push(sources[i]);
  }
 }

    creep.moveTo(sources[0]);
    creep.harvest(sources[0]);
    
}
