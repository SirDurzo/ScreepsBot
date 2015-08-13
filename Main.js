var harvester = require('harvester');
var guard = require('guard');
var builder = require('builder');
var upgrade = require('upgrade')

/* ---Still trying to get this to work
var hc = 0;
var uc = 0;
var bc = 0;

while ( Games.creeps < 10 ){
	if (Memory.role.'harvester' < 3)
		Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Harvester[hc++]', { role: 'harvester' } );
	else if (Memory.role.'upgrade' < 3)
		Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Upgrade[uc++]', { role: 'upgrade' } );
	else if (Memory.role.'builder' < 1)
		Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Builder[bc++]', {role: 'builder'} );
	else if (Memory.role.'harvester' < 5 && Memory.role.'upgrade' == 2 && Memory.role.'builder' == 1)
		Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Harvester[hc++]', { role: 'harvester' } );
}
*/
for(var name in Game.creeps) {
	var creep = Game.creeps[name];

	if(creep.memory.role == 'harvester') {
		harvester(creep);
	}

	if(creep.memory.role == 'builder') {
	    builder(creep);
	}
	
	if(creep.memory.role == 'guard') {
	    guard(creep);
	}
	if(creep.memory.role == 'upgrade') {
	    upgrade(creep);
	}
}



