module.exports = function (creep) {

//Define roles
/*
var roleInitHarvester = Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'InitHarvester' + Memory.count, { role: 'initharvester' } );
var roleHarvester = Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Harvester' + Memory.count, { role: 'harvester' } );
var roleCollector = Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Collector' + Memory.count, { role: 'collector' } );
var roleUpgrade = Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Upgrade' + Memory.count, { role: 'upgrade' } );
var roleBuilder = Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Builder' + Memory.count, { role: 'builder'} );
*/

//Create creep variable to determine number of creeps in the room
var creeps = Game.spawns.Spawn1.room.find(FIND_MY_CREEPS);

//Filter and determine number of each role for all the active creeps in the room
var countHarvester = _.filter(creeps, function(creep){ return creep.memory.role === 'harvester'}).length
var countInitharvester = _.filter(creeps, function(creep){ return creep.memory.role === 'initharvester'}).length
var countCollector = _.filter(creeps, function(creep){ return creep.memory.role === 'collector'}).length
var countUpgrade = _.filter(creeps, function(creep){ return creep.memory.role === 'upgrade'}).length
var countBuilder = _.filter(creeps, function(creep){ return creep.memory.role === 'builder'}).length


Memory.count = (Memory.count || 0) + 1;

	 if (countInitharvester < 2 && countHarvester <= 1)  {
		var result = Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'InitHarvester' + Memory.count, { role: 'initharvester' } ) ;
		console.log(" Spawning Initial Harvester - " + (countInitharvester + 1) + " of 3 result: " + result);
		return;
		}

	else if (countHarvester < 2) {
		var result = Game.spawns.Spawn1.createCreep( [WORK, WORK,WORK, MOVE], 'Harvester' + Memory.count, { role: 'harvester' } );
		console.log(" Spawning Harvester - " + (countHarvester +1) + " of 3 result: " + result);
		return;
		}
			
	else if (countCollector < 3) {
		var result = Game.spawns.Spawn1.createCreep( [CARRY, MOVE, CARRY, MOVE], 'Collector' + Memory.count, { role: 'collector' } );
        console.log(" Spawning Collector - " + (countCollector +1) + " of 3 result: " + result);
		return;
	}
    
	else if (countUpgrade < 2) {
		var result = Game.spawns.Spawn1.createCreep( [WORK, CARRY, WORK, MOVE], 'Upgrade' + Memory.count, { role: 'upgrade' } );
		console.log(" Spawning Upgrader - " + (countUpgrade +1) + " of 3 result: " + result) + ")";
		return;
	}

	/*
	else if (countHarvester >= 3 && countUpgrade >= 5 && countCollector < 6) {
	    var result = Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Collector' + Memory.count, { role: 'collector' } );
		console.log(" Spawning Collector - " + (countCollector +1) + " of 6 result: " + result);
		return;
	}
    */


	else if (countBuilder < 3) {
		var result = Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE, MOVE], 'Builder' + Memory.count, { role: 'builder'} );
		console.log(" Spawning Builder - " + (countBuilder +1) + " of 3 result: " + result);
		return;
	}
}
