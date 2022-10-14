function correct(string)
{
	return string.split('').map(char => char === '0' ? 'O' : char === '1' ? 'I' : char === '5' ? 'S' : char).join('');
}

// const corrections = {
//   '5': 'S',
//   '0': 'O',
//   '1': 'I',
// };

// const correct = string => (
//   string.replace(/[501]/g, character => corrections[character])
// );