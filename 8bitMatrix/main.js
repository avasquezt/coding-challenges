function bitMarch (n) { 
	return Array.from({length: 9 - n}, (_, i) => Array.from({length:8}, (_, j) => j >= ( 8 - n - i) && j < ( 8 - i ) ? 1 : 0 ));
}