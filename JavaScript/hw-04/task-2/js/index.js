'use strict';

const calculateEngravingPrice = function(message, pricePerWord) {
	return message.split(' ').length * pricePerWord;
};

console.log(calculateEngravingPrice('Prin soc nato et manis part moes mus', 50));

console.log(calculateEngravingPrice('Prin socs naue et magn par mones mus', 20));

console.log(calculateEngravingPrice('Done orci lectus aliqm est', 40));

console.log(calculateEngravingPrice('Donec orci lectus aliam est', 20));
