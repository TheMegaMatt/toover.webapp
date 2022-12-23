import { Code, Flex, Navbar, ScrollArea, Stack, useMantineTheme } from '@mantine/core';
import { Icon3dCubeSphere, IconLogout } from '@tabler/icons';
import { getEnvironment } from '@toover/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import useNavBarStyles from './styles';

export const NavBar = ({ hidden, menuItems }: any) => {
	const { classes, cx } = useNavBarStyles();
	const theme = useMantineTheme();
	const env = getEnvironment();
	const { t } = useTranslation();
	const data = menuItems(t);

	const links = data.map((item: any) => (
		<NavLink
			className={({ isActive }) => cx(classes.link, { [classes.linkActive]: isActive })}
			key={item.label}
			to={item.link}
		>
			<item.icon className={classes.linkIcon} stroke={1.5} />
			<span>{item.label}</span>
		</NavLink>
	));

	return (
		<Navbar height={'calc(100vh -60)'} width={{ sm: 300 }} p="md" hidden={hidden}>
			<Navbar.Section>
				<Stack className={classes.header} align={'center'}>
					<Icon3dCubeSphere size={56} style={{ color: theme.fn.primaryColor('light') }} />
					<Code sx={{ fontWeight: 700 }}>{env.env}</Code>
				</Stack>
			</Navbar.Section>

			<Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
				<Flex gap={'md'} direction={'column'}>
					{links}
				</Flex>
			</Navbar.Section>
			<Navbar.Section className={classes.footer}>
				<a href="/accounts/logout" className={classes.link}>
					<IconLogout
						style={{ marginRight: theme.spacing.md }}
						className={classes.linkIcon}
						stroke={1.5}
					/>
					<span>{t('app.nav.logout')}</span>
				</a>
			</Navbar.Section>
		</Navbar>
	);
};
