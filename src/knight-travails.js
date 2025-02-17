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

	shortestPath(start, destination) {
		if (!this.isWithinBoard(start[0], start[1])) return -1;

		const queue = [{ start, path: [start], moves: 0 }];
		const visited = new Set();
		const ROW = 0;
		const COLUMN = 1;

		visited.add(start.toString());

		while (queue.length) {
			const { start: currentPosition, path, moves } = queue.shift();
			const [x, y] = currentPosition;

			if (x === destination[ROW] && y === destination[COLUMN]) {
				return `You made it in ${moves} moves! Here's your path: ${path.map(
					(location) => {
						return `[${location}]`;
					},
				)}`;
			}

			for (let i = 0; i < this.possibleMoves.length; i++) {
				const updatedX = x + this.possibleMoves[i][ROW];
				const updatedY = y + this.possibleMoves[i][COLUMN];
				const updatedPosition = [updatedX, updatedY];

				if (
					this.isWithinBoard(updatedX, updatedY) &&
					!visited.has(updatedPosition.toString())
				) {
					queue.push({
						start: updatedPosition,
						path: [...path, updatedPosition],
						moves: moves + 1,
					});
					visited.add(updatedPosition.toString());
				}
			}
		}

		return -1;
	}
}

export { Knight };
