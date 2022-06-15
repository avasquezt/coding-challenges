function byteToSet (byte) {
	return new Set(byte.toString(2).padStart(8, '0').split('').map((n, i) => +n ? i : null).filter(n => n != null));
}