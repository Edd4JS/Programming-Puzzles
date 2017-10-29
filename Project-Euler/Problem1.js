const arrayOfInts = Array(1000).fill().map((_,i) => i);

let filteredArray = arrayOfInts.filter(int => int % 3 == 0 || int % 5 == 0);

let sumOfArray = filteredArray.reduce((a, b) => a + b);

Console.Log(sumOfArray);
