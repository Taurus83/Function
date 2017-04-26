
    function getTriangleArea(a, h) {

		// Instrukcje warunkowe
		if (a < 0 || h < 0) {
			return console.log('Nieprawidłowe dane');
		} else { return a*h/2 }
	}

// Wyświetlanie wyniku funkcji
console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 5);
var triangle3Area = getTriangleArea(2, 3);
console.log(triangle1Area, triangle2Area, triangle3Area);