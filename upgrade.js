module.exports = function(creep) {
    
    if(creep.carry.energy === 0) {
			creep.moveTo(Game.spawns.Spawn1);
			Game.spawns.Spawn1.transferEnergy(creep);
		}
		else {
			var mycontroller = creep.room.find(FIND_MY_STRUCTURES);
			if(mycontroller.length) {
				creep.moveTo(creep.room.controller);
				creep.upgradeController(creep.room.controller);
			}
		} 
}
