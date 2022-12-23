import { ColorScheme, MantineThemeOverride } from '@mantine/core';
import { PRIMARY_COLOR } from './colors';

export function getComponentsForColorScheme(colorScheme: ColorScheme): MantineThemeOverride {
	return {
		components: {
			Title: {
				defaultProps: {
					color: PRIMARY_COLOR,
				},
			},
			Button: {
				defaultProps: {
					variant: 'filled',
					color: PRIMARY_COLOR,
				},
			},
			Loader: {
				defaultProps: {
					variant: 'dots',
					color: PRIMARY_COLOR,
				},
			},
		},
	};
}
