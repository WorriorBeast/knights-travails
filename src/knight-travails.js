class Knight {
	constructor() {
		this.possibleMoves = [
			[1, 2],
			[2, 1],
			[-1, 2],
			[-2, 1],
			[-1, -2],
			[-2, -1],
			[1, -2],
			[2, -1],
		];
	}

	isWithinBoard(x, y) {
		return x < 8 && x >= 0 && y < 8 && y >= 0;
	}
}

export { Knight };
