
var harvester = require('harvester');
var guard = require('guard');
var builder = require('builder');
var upgrade = require('upgrade')

//Now with working creep automation. needed to initialize Memory.count

if(!Game.spawns.Spawn1.spawning) {
	jobs();
}

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


