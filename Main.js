
var harvester = require('harvester');
var guard = require('guard');
var builder = require('builder');
var upgrade = require('upgrade')

//Now with working creep automation. needed to initialize Memory.count

if(!Game.spawns.Spawn1.spawning) {
    
    Memory.count = (Memory.count || 0) + 1;
    
	if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'harvester'; }}).length < 4)
		Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Harvester' + Memory.count, { role: 'harvester' } );
        
    
	else if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'upgrade'; }}).length < 4)
		Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Upgrade' + Memory.count, { role: 'upgrade' } );

	
	else if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'harvester'; }}).length < 7 && 
	         Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'upgrade'; }}).length >= 3) 
	    Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Harvester' + Memory.count, { role: 'harvester' } );


	else if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'builder'; }}).length < 1)
		Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Builder' + Memory.count, { role: 'builder'} );
		
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


