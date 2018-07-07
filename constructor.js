//Constructors are close to functions
//This is es5 syntax
//You can pass in parameters into the constructor and then this.<parameter> set equal to what ever get passed in.
//Once you instatiate a book you can pass in those three parameters
function Book (title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}
//Can create new books from constructiors
//Instatiate an object
//When you instatiate an object from the constructor it will run whatever is inside.
//When you instatiate a book you can pass in the three parameters
// const book1 = new Book('Book One', 'John Doe', 2013);
//If you create another book
// const book2 = new Book('Book Two', 'Jane Doe', 2016);
// It will run twice because two book objects were instatiated

//Can create as many books as you want

// console.log(book1);
//Will pre-fix by type of object it is which is a book

//Can add a funtion as a property same as with object literals
function Book (title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummery = function (){
    return `${this.title} was written by ${this.author} in ${this.year}.`
  }
}

const book1 = new Book('Book One', 'John Doe', 2013);
const book2 = new Book('Book Two', 'Jane Doe', 2016);

console.log(book1.getSummery());
//Even if you had a thousand book objects you could call getSummery function and it is only defined once.