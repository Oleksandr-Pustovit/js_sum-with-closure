'use strict';

/**
 * function(num1)(num2) === num1 + num2;
 * @return {function}
 */

function makeRobotAccountant() {
  let firstNumber;
  let callNumber = 0;

  const add = function(number = 0) {
    if (firstNumber === undefined) {
      firstNumber = number;

      return add;
    }

    const sum = firstNumber + number;

    firstNumber = undefined;
    callNumber++;

    return callNumber > 3 && callNumber % 2 === 0
      ? 'Bzzz... Error!'
      : sum;
  };

  return add;
}

module.exports = makeRobotAccountant;
