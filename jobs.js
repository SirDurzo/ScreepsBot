

		var spawn = Game.spawns[index];module.exports = function (creep) {
	var energy = creep.room.find(FIND_DROPPED_ENERGY);

	var extensions = creep.room.find(FIND_MY_STRUCTURES, {
		filter: { structureType: STRUCTURE_EXTENSION } });
		
	var roomStorage = creep.room.find(FIND_MY_STRUCTURES, {
		filter: { structureType: STRUCTURE_STORAGE } });
	
	// collect
    if (creep.carry.energy === 0 && energy.length) {
        if(energy.length > 1){
            energy.sort(function (a, b) {
                return b.energy - a.energy
            });
        }
        creep.moveTo(energy[0]);
		creep.pickup(energy[0]);
		return;
    }
	
	// feed spawns
	for (var index in Game.spawns) {

		if (spawn.energy < spawn.energyCapacity) {
			creep.moveTo(spawn);
			creep.transferEnergy(spawn);
			return;
		}
	}
	
// feed extensions
	for (var index in extensions) {
		var extension = extensions[index];

		if (extension.energy < extension.energyCapacity) {
			creep.moveTo(extension);
			creep.transferEnergy(extension);
			return;
		}
	}
	
// feed storage

	//for (var index in roomStorage) {
	   //var myStorage = roomStorage[index];
       // console.log("before storage if")
       
		if (creep.room.storage.store.energy < creep.room.storage.storeCapacity) {
		    
		    //var storageLog = creep.room.storage;
		    //console.log("Storage=" + storageLog);
		    
			creep.moveTo(creep.room.storage);
			creep.transferEnergy(creep.room.storage);
			return;
		}
	//}
}
