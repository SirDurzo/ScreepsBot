module.exports = function (creep) {

Memory.count = (Memory.count || 0) + 1;
    
	if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'harvester'; }}).length < 7)
		Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Harvester' + Memory.count, { role: 'harvester' } );
        
    
	else if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'upgrade'; }}).length < 5)
		Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Upgrade' + Memory.count, { role: 'upgrade' } );

	
	else if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'harvester'; }}).length < 10 && 
	         Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'upgrade'; }}).length >= 5) 
	    Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Harvester' + Memory.count, { role: 'harvester' } );


	else if (Game.spawns.Spawn1.room.find(FIND_MY_CREEPS, { filter: function(creep){ return creep.memory.role == 'builder'; }}).length < 1)
		Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Builder' + Memory.count, { role: 'builder'} );
}
