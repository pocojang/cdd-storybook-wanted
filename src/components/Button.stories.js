import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
		color: { control: 'color' },
	},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
	args: {
		label: 'Button',
	},
};
