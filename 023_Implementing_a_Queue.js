// -- Description
// Create a square data structure. The queue should be a class with
// methods 'add' and 'remove'.
// Adding to the queue should store an element until it is removed

// -- Examples
//    const q = new Queue()
//    q.add(1)
//    q.remove() // returns 1

class Queue {
  constructor() {
    this.data = []
  }

  add(record) {
    this.data.unshift(record)
  }

  remove() {
    return this.data.pop()
  }
}

// -- To run the algorithm above
  // const q = new Queue()
// Add a record to the queue
  // q.add(1)
// Remove a record from the end of the queue (remember FIFO)
  // q.remove()




// -- NOTES
// Data Structures
  // Ways of organizing information with optimal 'runtime complexity' for adding,
  // editing, or removing records.
  // JS natively implements several data structures. You will be asked about
  // 'inferior' data structures.

// Queue Data Structure
  // Think of it as a line that people wait in. There is no idea of skipping or
  // cutting in line.
  // Enqueuing or adding - Adding a record to the Queue
  // Dequeuing or removing - Removing a record from the Queue
  // A queue follows a first-in-first-out (FIFO) principle

  // In JS when we want to implement a queue, we take an array and restrict the
  // methods that can be used to interact with the array.
  // We might make a queue class and initialize an empty array. To make sure it's
  // really clear that we are interacting with the array as a queue should be
  // we would ensure that we would only expose the unshift and pop methods outside
  // of the class.
  // Why would we do that? Why would we handicap our array? In an interview setting, 
  // we just do it. From a practical standpoint, maybe imagine for a second we are
  // working on a complicated problem and wanted to solve it with an algorithm using
  // a queue. If we utilize a queue, it's because we wanted a queue and don't want
  // to treat it like an array.