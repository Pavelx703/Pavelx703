'use strict';
// можно заменить this на inventory и будет работать
const inventory = {
	items: ['Knife', 'Gas mask'],
	add(itemName) {
	  console.log(`Adding ${itemName} to inventory`);
	  inventory.items.push(itemName);
	//   this.items.push(itemName);
	},
	remove(itemName) {
	  console.log(`Removing ${itemName} from inventory`);
	  inventory.items = inventory.items.filter(item => item !== itemName);
	//   this.items = this.items.filter(item => item !== itemName);
	},
  };
  
  const invokeInventoryAction = function(itemName, action) {
	console.log(`Invoking action on ${itemName}`);
	action(itemName);
};
//или через bind, но тогда придется менять аргумент в invokeInventoryAction

//   const boundAddItem = inventory.add.bind(inventory)
// invokeInventoryAction('Medkit', boundAddItem);
invokeInventoryAction('Medkit', inventory.add)
  // Invoking action on Medkit
  // Adding Medkit to inventory
  
console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
//   const boundRemoveItem = inventory.remove.bind(inventory)
// invokeInventoryAction('Gas mask', boundRemoveItem);
invokeInventoryAction('Gas mask', inventory.remove)
  // Invoking action on Gas mask
  // Removing Gas mask from inventory
  
  console.log(inventory.items); // ['Knife', 'Medkit']
