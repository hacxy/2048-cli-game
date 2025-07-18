import { useState } from 'react';
import { useInput } from 'ink';
import {
	hasMaxValue,
	initializeBoard,
	isGameOver,
	moveTiles,
	randomGenerateNum,
} from './utils.js';

export const useGameAction = () => {
	const [nums, setNums] = useState(randomGenerateNum(initializeBoard()));
	const [gameOver, setGameOver] = useState(false);
	const [gameScore, setGameScore] = useState(0);
	const [successNum, setSuccessNum] = useState(0);

	useInput((input, key) => {
		if (key.upArrow || input === 'k') {
			// 上
			const { board, score } = moveTiles(nums, 'up');
			const newBoard = randomGenerateNum(board);
			setGameScore(v => v + score);
			setGameOver(isGameOver(newBoard));
			const isSuccess = hasMaxValue(newBoard);
			if (isSuccess) {
				setSuccessNum(v => v + 1);
			}
			setNums(newBoard);
		}
		if (key.downArrow || input === 'j') {
			// 下
			const { board, score } = moveTiles(nums, 'down');
			const newBoard = randomGenerateNum(board);
			setGameScore(v => v + score);
			setGameOver(isGameOver(newBoard));
			const isSuccess = hasMaxValue(newBoard);
			if (isSuccess) {
				setSuccessNum(v => v + 1);
			}
			setNums(newBoard);
		}
		if (key.leftArrow || input === 'h') {
			// 左
			const { board, score } = moveTiles(nums, 'left');
			const newBoard = randomGenerateNum(board);
			setGameScore(v => v + score);
			setGameOver(isGameOver(newBoard));
			const isSuccess = hasMaxValue(newBoard);
			if (isSuccess) {
				setSuccessNum(v => v + 1);
			}

			setNums(newBoard);
		}
		if (key.rightArrow || input === 'l') {
			// 右
			const { board, score } = moveTiles(nums, 'right');
			const newBoard = randomGenerateNum(board);
			setGameScore(v => v + score);
			setGameOver(isGameOver(newBoard));
			const isSuccess = hasMaxValue(newBoard);
			if (isSuccess) {
				setSuccessNum(v => v + 1);
			}
			setNums(newBoard);
		}

		if (gameOver && input === 'r') {
			setGameOver(false);
			const newNums = randomGenerateNum(initializeBoard());
			setNums(newNums);
			setSuccessNum(0);
			setGameScore(0);
		}
	});

	return {
		nums,
		gameOver,
		gameScore,
		successNum,
	};
};
