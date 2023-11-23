'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////

/****************************** Simple Array Methods ******************************/
/*
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log("array after slice", arr);
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']

console.log(arr.slice(1, -2)); // ['b', 'c']

// Creating a shallow copy of any array
console.log(arr.slice()); //- ['a', 'b', 'c', 'd', 'e']

// SPLICE (actully deleting or Removing items)
// SPLICE same as SLICE but Difference is that it actully change the original array, i.e it MUTED array

// console.log(arr.splice(2)); // ['c', 'd', 'e']
// console.log("array after Splice", arr); // ['a', 'b']

console.log(arr.splice(-1)); // ['e']
console.log(arr); // ['a', 'b', 'c', 'd']
arr.splice(1, 2); // i.e b,c
console.log(arr); // ['a', 'd']

// REVERSE (Muted) change original array
arr = ["a", "b", "c", "d", "e"];

const arr2 = ["z", "y", "x", "v", "u", "r", "q"];
console.log(arr2.reverse()); // ['q', 'r', 'u', 'v', 'x', 'y', 'z']
console.log(arr2); // ['q', 'r', 'u', 'v', 'x', 'y', 'z']

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'q', 'r', 'u', 'v', 'x', 'y', 'z']
console.log(...arr, ...arr2); // a b c d e q r u v x y z

// JOIN using some seprator which we specify
console.log(letters.join("-"));

// we already know PUSH, UNSHIFT, POP, INDEX OF, and INCLUDES

// at Method also work with STRING

const arr3 = [10, 20, 30];
console.log(arr3[0]);
console.log(arr3.at(0));

// Getting Last Array element
console.log("Getting Last Array element");
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

// Second last element
console.log(arr3.at(-2));

console.log("Riyaz".at(4)); // z
console.log("Riyaz".at(-2)); // a

*/
/****************************** forEach Loop ******************************/
// break statement and Continue statement is not work in ForEach Loop
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('--------- for-of Loop -----------');
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You Deposited ${movement}`);
  } else {
    console.log(`You Withdraw ${Math.abs(movement)}`);
  }
}

console.log('--------- forEach Loop -----------');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You Deposited ${movement}`);
  } else {
    console.log(`You Withdraw ${Math.abs(movement)}`);
  }
});

console.log('--------- for-of Loop with entries -----------');

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You Deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdraw ${Math.abs(movement)}`);
  }
}

console.log('--------- forEach Loop with index and array -----------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You Deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdraw ${Math.abs(mov)}`);
  }
});

console.log(`***********************************************************`);
*/

/****************************** forEach Loop with Maps and Sets ******************************/
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log(`***********************************************************`);

*/

/********************************************************************************************************** */

/****************************** PROJECT: "Bankist" App ******************************/
// const displayMovements = function (movements) {
/// after lecture 'sorting arrays'
/// #2
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  // movements.forEach(function (mov, i) {
  ///after lecture 'sorting arrays'
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//// this is comment down after lecture of 'Implementing Login'
// displayMovements(account1.movements);

/// #4 from the Lecture of 'REDUCE Method'
// const calDisplayBalance = function (movements) {

/// after lecture "Implementing Transfer"
const calDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0); //after lecture "Implementing Transfer"
  labelBalance.textContent = `${balance}€`;
};
//// this is comment down after lecture of 'Implementing Login'
// calDisplayBalance(account1.movements);

/// #2 From the Lecture of 'The Magic of Chaining Methods'
// const calDisplaySummary = function (movements) {
/// after the lecture of 'Implemnting Login'
const calDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`; // 'Math.abs' is used here to remove - sign

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${intrest}`;
};

//// this is comment down after lecture of 'Implementing Login'
// calDisplaySummary(account1.movements);

/****************************** Computing Usernames ******************************/

///#4

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
// console.log(accounts);

/*
///#1
const user = 'Steven Thomas Williams'; // stw
const Username = user
  .toLowerCase()
  .split(' ')

  ///#3
  .map(name => name[0]) /// same as belove, here used arrow function

  ///#2
  // .map(function (name) {
  //   return name[0];
  // })
  .join('');
console.log(Username);
*/

/// /// after 'Implementing Transfer' Lecture
const updateUI = function (acc) {
  /// Display Movements
  displayMovements(acc.movements);

  /// Display Balance
  calDisplayBalance(acc);

  /// Display Summary
  calDisplaySummary(acc);
};

/******************************  Implementing Login ******************************/
/// Event handlers

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submiting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    /// Display UI and Message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    /// Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    /// user PIN field loses its focus
    inputLoginPin.blur();

    /// after 'Implementing Transfer' Lecture
    // /// Display Movements
    // displayMovements(currentAccount.movements);

    // /// Display Balance
    // calDisplayBalance(currentAccount);

    // /// Display Summary
    // calDisplaySummary(currentAccount);

    //Update UI
    updateUI(currentAccount);
  }
});

/****************************** Implementing Transfer  ******************************/

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  )
    /// Doing the transfer
    currentAccount.movements.push(-amount);
  receiverAcc.movements.push(amount);

  //Update UI
  updateUI(currentAccount);
});

/******************************  The some and every method ******************************/

/// Bank Rule:- Only grants loan if there is at least one deposit to hit it with at least 10% of the requested loan amount
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    /// or amount / 10

    /// Add Movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

/******************************  The findIndex Method ******************************/
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete Account
    accounts.splice(index, 1);
    /// Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

/// #3 after lecture Sorting array
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/****************************** the MAP Method ******************************/

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

/// Using Arrow Function
// const movementsUSD = movements.map(move => {  move * eurToUsd});

console.log(movements);
console.log(movementsUSD);

// same using for of loop

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`

  /// this is same as above
  // if (mov > 0) {
  //   console.log(`Movement ${i + 1}: You Deposited ${mov}`);
  // } else {
  //   console.log(`Movement ${i + 1}: You Withdraw ${Math.abs(mov)}`);
  // }
);
console.log(movementsDescriptions);

/****************************** the Filter Method ******************************/

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];

/// same as above
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

/****************************** the Reduce Method ******************************/

console.log(movements);

/// #1
// //Accumulator -> its just like SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

/// #3
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

/// #2 for-of loop
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

/// #5 Maximum Value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

/****************************** The Magic of Chaining Methods ******************************/

/// #1
///PIPELINE
// eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

/****************************** The find Method ******************************/

const firstWithdrwal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrwal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') console.log(acc);
}

/******************************  The some and every method ******************************/

console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY : need to satisfy all condition then it return true otherwise it will be false

console.log(movements.every(mov => mov > 0)); // false
console.log(account4.movements.every(mov => mov > 0)); // true

// Separate Callback function
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

/******************************  The flat and flatMap method ******************************/
/// flat method
// Nested Array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); //only 1 level
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

/// Same as above using chaining
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

/// flatMap method
const overalBalance2 = accounts
  .flatMap(acc => acc.movements) // in flatMap method we can't go to deep only 1 level deep
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

/******************************  Sorting array method ******************************/
/// #1
/// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // this actully muted the original array
console.log(owners);

/// Numbers
console.log(movements);
console.log(movements.sort()); //sort method does the sorting based on strings, it convert everything to strings and then it does sorting

/// return < 0, A, B (keep as it is)
/// return > 0, B, A (switch order)

/// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);

movements.sort((a, b) => a - b); // if a>b then 'a' is a posisitive number, so here then return positive number, it doesn't need to be exactly 1 just something greater than 0 and same for Descending
console.log(movements);

/// Decending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);
