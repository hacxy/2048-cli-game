import {Text} from 'ink';
import React from 'react';
import {countDigits} from '../../utils.js';

interface Props {
	nums: number[][];
}

const NumsBoard: React.FC<Props> = props => {
	const {nums} = props;
	const handleShowNum = (num: number) => {
		if (!num) {
			return '     ';
		}
		if (countDigits(num) === 1) {
			return `  ${num}  `;
		}
		if (countDigits(num) === 2) {
			return `  ${num} `;
		}
		if (countDigits(num) === 3) {
			return ` ${num} `;
		}
		if (countDigits(num) === 4) {
			return ` ${num}`;
		}
		return '     ';
	};
	return (
		<Text>
			{/* 顶部边框 */}
			<Text>┌───────┬───────┬───────┬───────┐{'\n'}</Text>

			{/* 第一行数字 */}
			<Text>
				<Text>
					│ {`     `} │ {`     `} │ {`     `} │ {`     `} │{'\n'}
				</Text>
				<Text>
					│ {handleShowNum(nums[0]![0]!)} │ {handleShowNum(nums[0]![1]!)} │{` `}
					{handleShowNum(nums[0]![2]!)} │ {handleShowNum(nums[0]![3]!)} │{'\n'}
				</Text>
				<Text>
					│ {`     `} │ {`     `} │ {`     `} │ {`     `} │{'\n'}
				</Text>
			</Text>

			{/* 中间分隔线 */}
			<Text>├───────┼───────┼───────┼───────┤{'\n'}</Text>

			{/* 第二行数字 */}
			<Text>
				<Text>
					│ {`     `} │ {`     `} │ {`     `} │ {`     `} │{'\n'}
				</Text>
				<Text>
					│ {handleShowNum(nums[1]![0]!)} │ {handleShowNum(nums[1]![1]!)} │{' '}
					{handleShowNum(nums[1]![2]!)} │ {handleShowNum(nums[1]![3]!)} │{'\n'}
				</Text>
				<Text>
					│ {`     `} │ {`     `} │ {`     `} │ {`     `} │{'\n'}
				</Text>
			</Text>

			{/* 中间分隔线 */}
			<Text>├───────┼───────┼───────┼───────┤{'\n'}</Text>

			{/* 第三行数字 */}
			<Text>
				<Text>
					│ {`     `} │ {`     `} │ {`     `} │ {`     `} │{'\n'}
				</Text>
				<Text>
					│ {handleShowNum(nums[2]![0]!)} │ {handleShowNum(nums[2]![1]!)} │{' '}
					{handleShowNum(nums[2]![2]!)} │ {handleShowNum(nums[2]![3]!)} │{'\n'}
				</Text>
				<Text>
					│ {`     `} │ {`     `} │ {`     `} │ {`     `} │{'\n'}
				</Text>
			</Text>

			{/* 中间分隔线 */}
			<Text>├───────┼───────┼───────┼───────┤{'\n'}</Text>

			{/* 第四行数字 */}
			<Text>
				<Text>
					│ {`     `} │ {`     `} │ {`     `} │ {`     `} │{'\n'}
				</Text>
				<Text>
					│ {handleShowNum(nums[3]![0]!)} │ {handleShowNum(nums[3]![1]!)} │{' '}
					{handleShowNum(nums[3]![2]!)} │ {handleShowNum(nums[3]![3]!)} │{'\n'}
				</Text>
				<Text>
					│ {`     `} │ {`     `} │ {`     `} │ {`     `} │{'\n'}
				</Text>
			</Text>

			{/* 底部边框 */}
			<Text>└───────┴───────┴───────┴───────┘</Text>
		</Text>
	);
};

export default NumsBoard;
