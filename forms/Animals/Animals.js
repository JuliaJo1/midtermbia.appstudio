/*Created an array named myAnimals with these animals in it:
   dog, cat, horse, meerkat*/
let myAnimals = ['dog','cat','horse','meerkat']

  enterAnimal = prompt("Enter an animal into the array:")

newAnimalEntry = enterAnimal.toLowerCase()


myAnimals.push(newAnimalEntry)
 alert(`The last animal is ${myAnimals[myAnimals.length - 1]}`)



/* Output the last animal in the array using an array method to an alert using a template literal to the console with the format below. Used the myAnimals array in the template literal to show the last animal added: 
*/