var monkey = {
	name: ["Johnny", "Peter", "Larry"],
	specie: ["Mandril", "Baboon", "Capuchin"],
	foodsEaten: [],
	eatSomething : function (index,food){
		monkey.foodsEaten[index] = food;
	},
	introduce: function(x) {
    	console.log("Hello! My name is " + monkey.name[x] + ". I am a " + monkey.specie[x] + " monkey and I enjoy eating " + monkey.foodsEaten[x]);
  	}
};




