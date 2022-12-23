import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { FC, PropsWithChildren, useState } from 'react';
import { getTheme } from './theme';

export * from './theme';

export const MantineContext: FC<PropsWithChildren> = ({ children }) => {
	const preferredColorScheme = useColorScheme(
		localStorage.getItem('theme') as unknown as ColorScheme
	);
	const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);

	const toggleColorScheme = (value?: ColorScheme) => {
		const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
		setColorScheme(nextColorScheme);
		localStorage.setItem('theme', nextColorScheme);
	};

	return (
		<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
			<MantineProvider theme={{ ...getTheme(colorScheme) }} withGlobalStyles withNormalizeCSS>
				<ModalsProvider>
					<NotificationsProvider position={'top-right'}>{children}</NotificationsProvider>
				</ModalsProvider>
			</MantineProvider>
		</ColorSchemeProvider>
	);
};
