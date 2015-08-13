var harvester = require('harvesters');
var guard = require('guards');
var builder = require('builders');

for(var creepName in Game.creeps) {
	var creep = Game.creeps[creepName];

	if(creep.memory.role == 'harvester') {
		harvester(creep);
	}

	if(creep.memory.role == 'builder') {
	    builder(creep);
	}
	
	if(creep.memory.role == 'guard') {
	    guard(creep);
	}
}
