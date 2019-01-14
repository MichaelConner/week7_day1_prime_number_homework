const PubSub = require('../helpers/pub_sub.js')

const PrimeNumber = function () {

};

PrimeNumber.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputNumber = event.detail;
    const primeNumber = this.numberIsPrime(inputNumber);
    PubSub.publish('PrimeNumber:result-calculated', primeNumber)
  })
};

PrimeNumber.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeNumber;
