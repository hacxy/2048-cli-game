import { GRID_SIZE, MAX_VALUE } from './constants.js';

export const sumArray = (arr: number[]) => arr.reduce((a, b) => a + b, 0);

// 收集所有空白位置
export const getEmptyCells = (nums: number[][]) => {
	const emptyCells: { row: number; col: number }[] = [];

	for (let row = 0; row < nums.length; row++) {
		for (let col = 0; col < nums[row]!.length; col++) {
			if (nums[row]![col] === 0) {
				emptyCells.push({ row, col });
			}
		}
	}

	return emptyCells;
};

export const getRandomCells = (
	emptyCells: { row: number; col: number }[],
): { row: number; col: number } | undefined => {
	if (emptyCells.length) {
		return emptyCells[Math.floor(Math.random() * emptyCells.length)]!;
	} else {
		return;
	}
};

// 移动并合并方块
export const moveTiles = (
	board: number[][],
	direction: 'up' | 'down' | 'left' | 'right',
) => {
	const newBoard = JSON.parse(JSON.stringify(board));
	let moved = false;
	let score = 0;

	// 根据方向处理移动
	switch (direction) {
		case 'up':
			for (let col = 0; col < GRID_SIZE; col++) {
				for (let row = 1; row < GRID_SIZE; row++) {
					if (newBoard[row][col] !== 0) {
						let currentRow = row;
						while (currentRow > 0 && newBoard[currentRow - 1][col] === 0) {
							// 向上移动
							newBoard[currentRow - 1][col] = newBoard[currentRow][col];
							newBoard[currentRow][col] = 0;
							currentRow--;
							moved = true;
						}

						// 检查合并
						if (
							currentRow > 0 &&
							newBoard[currentRow - 1][col] === newBoard[currentRow][col]
						) {
							// 合并方块
							newBoard[currentRow - 1][col] *= 2;
							score += newBoard[currentRow - 1][col];
							newBoard[currentRow][col] = 0;
							moved = true;
						}
					}
				}
			}
			break;

		case 'down':
			for (let col = 0; col < GRID_SIZE; col++) {
				for (let row = GRID_SIZE - 2; row >= 0; row--) {
					if (newBoard[row][col] !== 0) {
						let currentRow = row;
						while (
							currentRow < GRID_SIZE - 1 &&
							newBoard[currentRow + 1][col] === 0
						) {
							// 向下移动
							newBoard[currentRow + 1][col] = newBoard[currentRow][col];
							newBoard[currentRow][col] = 0;
							currentRow++;
							moved = true;
						}

						// 检查合并
						if (
							currentRow < GRID_SIZE - 1 &&
							newBoard[currentRow + 1][col] === newBoard[currentRow][col]
						) {
							// 合并方块
							newBoard[currentRow + 1][col] *= 2;
							score += newBoard[currentRow + 1][col];
							newBoard[currentRow][col] = 0;
							moved = true;
						}
					}
				}
			}
			break;

		case 'left':
			for (let row = 0; row < GRID_SIZE; row++) {
				for (let col = 1; col < GRID_SIZE; col++) {
					if (newBoard[row][col] !== 0) {
						let currentCol = col;
						while (currentCol > 0 && newBoard[row][currentCol - 1] === 0) {
							// 向左移动
							newBoard[row][currentCol - 1] = newBoard[row][currentCol];
							newBoard[row][currentCol] = 0;
							currentCol--;
							moved = true;
						}

						// 检查合并
						if (
							currentCol > 0 &&
							newBoard[row][currentCol - 1] === newBoard[row][currentCol]
						) {
							// 合并方块
							newBoard[row][currentCol - 1] *= 2;
							score += newBoard[row][currentCol - 1];
							newBoard[row][currentCol] = 0;
							moved = true;
						}
					}
				}
			}
			break;

		case 'right':
			for (let row = 0; row < GRID_SIZE; row++) {
				for (let col = GRID_SIZE - 2; col >= 0; col--) {
					if (newBoard[row][col] !== 0) {
						let currentCol = col;
						while (
							currentCol < GRID_SIZE - 1 &&
							newBoard[row][currentCol + 1] === 0
						) {
							// 向右移动
							newBoard[row][currentCol + 1] = newBoard[row][currentCol];
							newBoard[row][currentCol] = 0;
							currentCol++;
							moved = true;
						}

						// 检查合并
						if (
							currentCol < GRID_SIZE - 1 &&
							newBoard[row][currentCol + 1] === newBoard[row][currentCol]
						) {
							// 合并方块
							newBoard[row][currentCol + 1] *= 2;
							score += newBoard[row][currentCol + 1];
							newBoard[row][currentCol] = 0;
							moved = true;
						}
					}
				}
			}
			break;
	}

	return { board: newBoard, moved, score };
};

export function countDigits(num: number): number {
	// 处理负号和小数点
	const numStr = String(num).replace(/[-.]/g, '');
	return numStr.length;
}

export const randomGenerateNum = (board: number[][]) => {
	const emptyCells = getEmptyCells(board);
	const cells = getRandomCells(emptyCells);
	if (cells) {
		// 90% 概率生成2，10%概率生成4
		board[cells.row]![cells.col] = Math.random() < 0.9 ? 2 : 4;
	}

	return JSON.parse(JSON.stringify(board));
};

export const isGameOver = (nums: number[][]) => {
	// 检查是否有空白位置
	for (let row = 0; row < GRID_SIZE; row++) {
		for (let col = 0; col < GRID_SIZE; col++) {
			if (nums[row]![col] === 0) return false;
		}
	}

	// 检查是否有相邻的相同方块
	for (let row = 0; row < GRID_SIZE; row++) {
		for (let col = 0; col < GRID_SIZE; col++) {
			const value = nums[row]![col];

			// 检查右侧方块
			if (col < GRID_SIZE - 1 && nums[row]![col + 1] === value) return false;

			// 检查下方方块
			if (row < GRID_SIZE - 1 && nums[row + 1]![col] === value) return false;
		}
	}

	return true;
};

export const hasMaxValue = (board: number[][]) => {
	for (let row = 0; row < GRID_SIZE; row++) {
		for (let col = 0; col < GRID_SIZE; col++) {
			if (board[row]![col] === MAX_VALUE) {
				board[row]![col] = 0;
				return true;
			}
		}
	}
	return false;
};

// 生成初始游戏板
export const initializeBoard = () => {
	const board = Array(GRID_SIZE)
		.fill(0)
		.map(() => Array(GRID_SIZE).fill(0));

	return board;
};
