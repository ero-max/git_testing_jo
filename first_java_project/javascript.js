
 function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))



const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'




const myText = "I am a string";
const newString = myText.replace("string", "sausage");



function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
  }
  
  hello("Ari"); // Hello Ari!
  hello(); // Hello Chris!
  function myFunction() {
    alert("hello");
  }
  