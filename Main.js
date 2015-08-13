var harvester = require('harvester');
var guard = require('guard');
var builder = require('builder');
var upgrade = require('upgrade')

//automatically spawning - however hc isnt incrementing... maybe try a for loop instead of if/else
var hc = 0;
var uc = 0;
var bc = 0;
if(!Game.spawns.Spawn1.spawning) {
	if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'harvester'; }}).length < 3)
		Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Harvester' + [hc++], { role: 'harvester' } );
	else if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'upgrade'; }}).length < 3)
		Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Upgrade' + [uc++], { role: 'upgrade' } );
	else if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'builder'; }}).length >)
		Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Builder' + [bc++], {role: 'builder'} );
	else if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'harvester'; }}).length < 5 && 
	         Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'upgrade'; }}).length == 2 && 
	         Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'builder'; }}).length == 1)
		Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Harvester' + [hc++], { role: 'harvester' } );
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



