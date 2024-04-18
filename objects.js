//write a function that returns a new array containing the names of all people who are 18 years old or older
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];

function aboveEighteenPeople(people){
    let peeps = people.filter(person => person.age>=18).map(person => person.name)
    return peeps;
}
console.log(aboveEighteenPeople(people));

//The function should return an object that groups the products by their categories, with the category names as keys and the arrays of products as values. 
   const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];


function groupByCategory(products){
   let result  = products.groupBy(products,(product) => product.category)
    return result;
}
console.log(groupByCategory(products));

   // write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85

   const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
function findAverage(students){
  let score = students.filter(student => student.scores)
  let average = students.score.scores.reduce((a,b) => a+b, 0)/ students.score.scores.length
  let result = students.average.scores.map(student => student.name )
  return result
}
console.log(findAverage(students));

//write a function that takes the car object and adds a new method to the object called age. 
//The age method should return the current age of the car based on the current year and the car's year property.
const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
  function carAge(car){
    car = 2030 - car.year
    return car
  }
  console.log(carAge(car));
  


    