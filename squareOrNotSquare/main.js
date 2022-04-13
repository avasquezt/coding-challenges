const squareOrSquareRoot = array => array.map(n => n ** (1 / 2) % 1 ? n ** 2 : n ** (1 / 2))
