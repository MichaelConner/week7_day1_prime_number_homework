const PubSub = require('../helpers/pub_sub.js')

const ResultView = function() {

};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeNumber:result-calculated', (event) => {
    const primeNumber = event.detail
    this.displayResult(primeNumber)
  })
};

ResultView.prototype.displayResult = function (result) {
  console.log(result);
  if (result) {
    const resultElement = document.querySelector('#result');
    resultElement.textContent = `Yes! It's a prime number.`;
  }
  else {
    const resultElement = document.querySelector('#result');
    resultElement.textContent = `No! It's not a prime number`;
  }
};

module.exports = ResultView;
