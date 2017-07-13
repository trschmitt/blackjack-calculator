/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

//cards #=> ["2"]

function handValue (cards) {
  let totalValue = 0;

  totalValue = parseInt(cards[0]) + totalValue;

  // TODO: Loop over cards and convert to total value
    // TODO: convert string value into number
    // TODO: add numerical value to total value



  // TODO: convert string values into numbers


  return totalValue;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
