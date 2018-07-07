//String Hello is a primative not an object once a method is called on it then the javascript engine behind the scenes adds a wrapper to it. The to uppercase method converts all alphabetic characters in a string to uppercase.
const s1 = 'Hello'; 
console.log(s1.toUpperCase());
console.log(typeof s1);//When you console log type of s1 it is a string

//You can create strings as objects
const s2 = new String('Hello');
console.log(typeof s2);
//When you console log type of s2 it is an object.


//Window is the absolute parent object.  In the DOM there is nothing above window so you dont have to use window in front of alert method you can just do alert.
console.log(window);
window.alert(1);

console.log(navigator.appVersion);
//window.alert is an object with a method and navigator.appVersion is an object with a property.

//Object Literials

const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: 2013
}

//You can get an individual value by taking the object and adding .<property>
console.log(book1.title);

//You can also put in a function as a property
//fuction getSummery will return the title, author and the year concatenated together as a short summery.
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: 2013,
  getSummery: function(){
    //This keyword is refering to the current object and can get the property of title by using .title Templete Literals by using backticks and ${} variables

    return `${this.title} was written by ${this.author} in ${this.year}.`
  }
};

const book2 = {
  title: 'Book Two',
  author: 'Jane Doe',
  year: 2016,
  getSummery: function(){
    return `${this.title} was written by ${this.author} in ${this.year}.`
  }
};
console.log(book2.getSummery());

// To see all of the values of an object
console.log(Object.values(book2));
// It gives you an array of the values inside

//Can also get the keys
console.log(Object.keys(book1));

