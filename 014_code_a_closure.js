// -- Directions
// provide an example of a closure

// A closure is when an inner function can remember and access its lexical
// scope even when it's invoked outside of its lexical scope. Another way to
// look at it is when a function's lexical scope persists through an external
// reference.

// Closures are frequently used in JS for object data privacy, in event
// handlers and callback functions.

const manageBankAccount = function (initialBalance) {
  let accountBalance = initialBalance

  return {
    getBalance: function () {
      return accountBalance
    },
    deposit: function (amount) {
      accountBalance += amount
    },
    withdraw: function (amount) {
      if (amount > accountBalance) {
        return `You cannot withdraw that much!`
      }
      accountBalance -= amount
    }
  }
}

const accountManager = manageBankAccount(0)
accountManager.deposit(1000)
accountManager.withdraw(500)
console.log(accountManager.getBalance())
