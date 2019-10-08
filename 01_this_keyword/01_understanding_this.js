// The 'this' keyword allows you to reuse functions within different contexts
// Said differently the 'this' keyword allows you to decide which object should be focal when invoking a function or method

// When we attempt to figure out what the 'this' keyword is referencing
// we will look at:
/*
  - Implicit Binding
  - Explicit Binding
  - new Binding
  - window Binding
*/


// --IMPLICIT BINDING--

// The most common rule to figure out what the 'this' keyword is
// referencing is Implicit Binding.
// Look to the left of the dot

const user = {
  name: 'Christian',
  age: 27,
  greet() {
    alert(`Hello my name is ${name}`)
  }
}

// If were were to invoke the greet method on the user object, you'd
// be doing so using dot notation.
user.greet()

// Look to the left of the dot when the function is invoked
// In the example above, 'user' is to "the left of the dot" which means
// the 'this' keyword is referencing the 'user' object

// Here's a more advanced example
const user = {
  name: 'Tyler',
  age: 27,
  greet() {
    alert(`Hello my name is ${name}`)
  },
  mother: {
    name: 'Stacey',
    greet() {
      alert(`Hello my name is ${name}`)
    }
  }
}

user.mother.greet()
// returns Hello my name is Stacey
// remember look to the left of the dot


// --EXPLICIT BINDING--

// What if greet was a standalone function

function greet() {
  alert(`Hello my name is ${this.name}`)
}

const user = {
  name: 'Tyler',
  age: 27
}

// To invoke greet we use a method all functions have which is named 
// 'call'
// "call" is a method on every function that allows you to invoke the function specifying in what context the function will be invoked

greet.call(user)

// Let's modify the greet function to take in some arguments

function greet(l1, l2, l3) {
  alert(`Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`)
}

// In order to pass arguments to a function being invoked with .call, you pass them in one by one after you specify the first argument which is the context

function greet(l1, l2, l3) {
  alert(`Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`)
}

const user = {
  name: 'Tyler',
  age: 27
}

const languages = ['JavaScript', 'Ruby', 'Python']

greet.call(user, languages[0], languages[1], languages[2])

// .apply lets you pass in the array containing the arguments

greet.apply(user, languages)

// .bind is the exact same as .call but instead of immediately invoking the function, it'll return a new function that you can invoke at a later time

function greet(l1, l2, l3) {
  alert(`Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`)
}

const user = {
  name: 'Tyler',
  age: 27
}

const languages = ['JavaScript', 'Ruby', 'Python']

const newFun = greet.bind(user, languages[0], languages[1], languages[2])


// --NEW BINDING--

// Whenever you invoke a function with the 'new' keyword, under the 
// hood, the JS interpretor will create a brand new object for you and 
// call it 'this'.
// So, naturally, if a function was called with 'new', the 'this' keyword is referencing that new object that the interpretor created

function User(name, age) {
  /* 
    Under the hood, JavaScript creates a new object called 'this'
    which delegates to the User's prototype on failed lookups. If a
    function is called with the 'new' keyword, then it's this new object that the interpretor created that the this keyword is
    referencing
   */
  this.name = name
  this.age = age
}

const me = new User('Tyler', 27)


// --LEXICAL BINDING--

// With arrow functions, they don't have their own 'this'.
// Instead 'this' is determined lexically

const user = {
  name: 'Tyler',
  age: 27,
  languages: ['JavaScript', 'Ruby', 'Python'],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`

    const langs = this.languages.reduce((str, lang, i) => {
      if (i === this.languages.length - 1) {
        return `${str} and ${lang}.`
      }

      return `${str} ${lang},`
    }, "")

    alert(hello + langs)
  }
}


// --WINDOW BINDING--

// Window binding is a catch all case

function sayAge() {
  console.log(`My age is ${this.age}`)
}

const user = {
  name: 'Tyler',
  age: 27
}

// If you invoked sayAge()

sayAge() // returns My age is undefined

// My age is undefined because this.age is undefined
// What's really happening here is that because there is nothing to 
// the left of the dot JS is defaulting 'this' to reference the window 
// object.
// What that means is if we add an age property to the window object, then when we invoke our sayAge function again, this.age will no longer be undefined but instead, it'll be whatever the age property is on the window object

window.age = 27

function sayAge() {
  console.log(`My age is ${this.age}`)
}

sayAge() // returns My age is 27