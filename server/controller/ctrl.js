const recipes = require("../db.json");

module.exports = {
	getRecipe: (req, res) => {
		res.status(200).send(recipes);
	},
	// deleteHouse: (req, res) => {
	//     // deconstucting and creating a variable that is the req.param:id
	//     const {id} = req.params;
	//     //setting a variable named index to a certain index in the houses variable
	//     const index = houses.findIndex((house) => {
	//         //finding the index that is equal to id in integer from and returning it
	//         return house.id === +id
	//     });
	//     //what to do with the info we got from above
	//     if(index === -1) { /* -1 if index does not exist */
	//         res.status(400).send('Unable to find house')
	//     } else {
	//         //if it finds it, splice the house to be deleted out and return the remaining houses
	//         houses.splice(index, 1);
	//         res.status(200).send(houses);
	//     }
	// },
	// createHouse: (req,res) => {
	//     //what we need to make a house object
	//     let {address, price, imageURL} = req.body;
	//     price = +price
	//     //how we make a house object
	//     const newHouse = {id, address, price, imageURL};
	//     houses.push(newHouse);
	//     id++;
	//     res.status(200).send(houses);
	// },
	// updateHouse: (req,res) => {
	//     let {type} = req.body;
	//     const {id} = req.params;
	//     const index = houses.findIndex((house) => {
	//         return house.id === +id;
	//     });
	//     if (type === 'plus') {
	//         houses[index].price = houses[index].price + 10000
	//         res.status(200).send(houses)
	//     } else if (type === 'minus') {
	//         houses[index].price = houses[index].price - 10000
	//         res.status(200).send(houses)
	//     } else {
	//         res.status(400).send('Something went wrong')
	//     }
	// },
};
