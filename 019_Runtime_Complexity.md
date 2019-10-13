# Runtime Complexity

####  Describes the performance of an algorithm.
#### How much more processing power/time is required to run your algorithm if we double the inputs?

\
**Linear runtime**
* Refer to exercise 004_Reverse_String
  * one for one - example each additional character equals 1 step through the loop

\
**Quadratic runtime**
* Refer to exercise 016_Printing_Steps
  * As 'n' increased by one, we had to do way, way more stuff, or (n * n) things total
  * This would be n^2, or quadratic runtime

## Runtimes you want to keep in mind for an interview

**Constant Time**
* 1
* No matter how many elements we're working with, the algorithm/operation/whatever will always take the same amount of time.

\
**Logrithmic Time**
* log(n)
* You have this if doubling the number of elements you are iterating over doesn't double the amount of work.
  * Always assume that searching operations are log(n)

\
**Linear Time**
* n
* Iterating through all the elements in a collection of data.
* If you see a for loop spanning from '0' to 'array.length', you probably have 'n', or linear runtime.

\
**Quasilinear Time**
* n * log(n)
* You have this if doubling the number of elements you are iterating over doesn't double the amount of work.
* Always assume that any sorting operations is n * log(n)

\
**Quadratic Time**
* n ^ 2
* Every element in a collection has to be compared to every other element.
* 'The Handshake Problem'
  * Imagine a group of people standing in a room
  * You bring in a new person and introduce them to everyone in the room and have them shake hands
  * Each additional element that we add to a given collection has to touch, or somehow iterate over, or somehow deal with every other element in the collection

\
**Exponential Time**
* 2 ^ n
* If you add a "single" element to a collection, the processing power required doubles.
* We want to avoid any algorithm that starts to use exponential time
* Do not start to suggest an exponential time solution to a problem in an interview
  * It is a very big deal to suggest something like this - don't do it

## Big O Notation

* O(n) --> Linear
* O(1) --> constant
* O(n^2) --> Quadratic

### Indentifying Common Runtime Complexities

* Iterating with a simple for loop through a single collection (e.g. string reverse)? --> Probably O(n)
  ** n indicates the performance impact of the string 

* Iterating through half a collection (e.g. half a string, stops early)? --> Still O(n). There are no constants in runtime.

* Iterating through two "different" collections with separate for loops (e.g. algorithm that reverses 2 different strings - you would have 2 separate for loops)? --> O(n + m)
  * n indicates the performance impact of the first string
  * m indicates the performance impact of the second string
  * This just doesn't apply to strings. Anytime you are iterating over or processing two completely different sets of data you'll frequently see the runtime complexity split out to two separate terms

* Two nested for loops iterating over the same collection? --> O(n^2)

* Two nested for loops iterating over different collections? --> O(n * m)

* Sorting? --> O(n*log(n))

* Searching a sorted array? --> O(log(n))