import React from 'react';
import Screen from './components/Screen/index.js';
import NumsBoard from './components/NumsBoard/index.js';
import {Box, Text} from 'ink';
import {useGameAction} from './useGameAction.js';

export default function App() {
	const {nums, gameOver, gameScore, successNum} = useGameAction();

	return (
		<Screen>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				width={'100%'}
				height={'100%'}
				borderStyle={'single'}
			>
				<Box>
					<Text>得分: {gameScore}</Text>
				</Box>
				<Box>
					<Text>已合成 {successNum} 个 2048 </Text>
				</Box>
				<NumsBoard nums={nums} />
				<Box>
					<Text>提示: 按⭡ ⭣ ⭠ ⭢ 或 h j k l 来控制合并方向</Text>
				</Box>
				<Box>{gameOver && <Text>游戏结束了, 按 "r" 重新开始</Text>}</Box>
			</Box>
		</Screen>
	);
}
