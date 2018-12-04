window.onload = function() {
	function multiMax(first, ...remainingNumbers)
	{
		let sorted = remainingNumbers.sort(function(a, b){
			return b-a;
		});

		return first * sorted[0];
	}

	document.write(multiMax(3, 1, 2, 3));

	// var values = [0, 3, 2, 5, 7, 4, 8, 1];

	// document.write(values + '<br><br>');

	// values.sort(function(value1, value2) {
	// 	return value2-value1;
	// });

	// document.write(values);
}