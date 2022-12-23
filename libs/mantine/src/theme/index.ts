import { ColorScheme, MantineThemeOverride } from '@mantine/core';
import { APP_COLORS } from './colors';
import { getComponentsForColorScheme } from './components';
import { APP_FONTS } from './fonts';

export * from './colors';

export const APP_THEME: MantineThemeOverride = {
	...APP_COLORS,
	...APP_FONTS,
};

export function getTheme(colorScheme: ColorScheme): MantineThemeOverride {
	return {
		...APP_THEME,
		...getComponentsForColorScheme(colorScheme),
		colorScheme,
	};
}
