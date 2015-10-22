module.exports = function (creep) {
 
 var gameSources = creep.room.find(FIND_SOURCES);
 
 //console.log(creep.room.memory.sources);
 
 if (creep.room.memory.sources.length === 0){
 //console.log("harvester - in If Statement");
 	 
  creep.room.memory.sources = [];
  for (var i in gameSources){
    //console.log(gameSources[i]);  
    creep.room.memory.sources.push(gameSources[i]);
    creep.room.memory.sources[0].occupants = [];
	creep.room.memory.sources[1].occupants = [];
  }
 }

if (creep.room.memory.sources[0].occupants.length){

    creep.room.memory.sources[0].occupants.push(creep.id);
    creep.room.memory.targetSource = gameSources[0].id;
}

else if (creep.room.memory.sources[1].occupants === 0){
	
    creep.room.memory.sources[1].occupants.push(creep.id)
    creep.room.memory.targetSource = gameSources[1].id;
}

	creep.moveTo(Game.getObjectById(creep.room.memory.targetSource));
    creep.harvest(Game.getObjectById(creep.room.memory.targetSource));
        
}


/*
for (var creep in creep.room.memory.sources[1].occupants){
      if (Game.getObjectById(creep.room.memory.sources[1].occupants[creep]) === null){
   //do something here to delete the bad item from the array...i'll let you look up how to delete an item from an index
}
}
*/
