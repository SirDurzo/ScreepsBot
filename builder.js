module.exports = function(creep) {
    
    if(creep.carry.energy === 0) {
    	   //	var roomStorage = creep.room.find(FIND_MY_STRUCTURES, {
		   //   filter: { structureType: STRUCTURE_STORAGE } });
			
			creep.moveTo(creep.room.storage);
			creep.room.storage.transferEnergy(creep);
		}
		else {
			var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if(targets.length) {
				creep.moveTo(targets[0]);
				creep.build(targets[0]);
			}
		}
}
