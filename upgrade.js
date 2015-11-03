module.exports = function(creep) {
    
    if(creep.carry.energy === 0) {
    	    		
    	   	// var roomStorage = creep.room.find(FIND_MY_STRUCTURES, {
			// filter: { structureType: STRUCTURE_STORAGE } });
			
			creep.moveTo(creep.room.storage);
			creep.room.storage.transferEnergy(creep);
		}
		else {
			var mycontroller = creep.room.find(FIND_MY_STRUCTURES);
			
			if(mycontroller.length) {
				creep.moveTo(creep.room.controller);
				creep.upgradeController(creep.room.controller);
			}
		} 
}
