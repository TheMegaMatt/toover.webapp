import { MantineThemeOverride } from '@mantine/core';

export const PRIMARY_COLOR = 'toover';
export const SECONDARY_COLOR = 'toover-dark';
export const APP_COLORS: MantineThemeOverride = {
	primaryShade: {
		dark: 3,
		light: 6,
	},
	colors: {
		[PRIMARY_COLOR]: [
			'#f7e6ff',
			'#ddb9fb',
			'#c08cf4',
			'#a25fee',
			'#8231e8',
			'#7417ce',
			'#6411a1',
			'#4f0b74',
			'#350648',
			'#18011d',
		],

		[SECONDARY_COLOR]: [
			'#e3f0ff',
			'#c2d9ee',
			'#9fc2e0',
			'#7aadd2',
			'#589ac5',
			'#3f83ab',
			'#2f6986',
			'#1f4d60',
			'#0e2b3c',
			'#000d18',
		],
	},
	primaryColor: PRIMARY_COLOR,
};
