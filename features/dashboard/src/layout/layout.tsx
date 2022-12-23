import { AppShell, Burger, Header, MediaQuery, Text, useMantineTheme } from '@mantine/core';
import { PRIMARY_COLOR } from '@toover/mantine';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components';
import NavBarItems from './navigation';

export const AppLayout = () => {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const { t } = useTranslation();
	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={<NavBar menuItems={NavBarItems} hidden={!opened} />}
			header={
				<Header height={50} p="md">
					<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
						<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size="sm"
								color={theme.colors.gray[6]}
								mr="xl"
							/>
						</MediaQuery>

						<Text color={PRIMARY_COLOR} weight={'lighter'} size={'xl'}>
							{t('app.title')}
						</Text>
					</div>
				</Header>
			}
		>
			<Outlet></Outlet>
		</AppShell>
	);
};
