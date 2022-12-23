import { BackgroundImage, Flex, Paper, Title } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

export default () => {
	const { t, i18n } = useTranslation();

	return (
		<BackgroundImage src={'https://toover-dev.overapp.com/assets/background.1cf7de59.jpg'}>
			<Flex
				sx={{ position: 'relative' }}
				h={'100vh'}
				w={'100vw'}
				gap="md"
				justify="center"
				align="center"
				direction="row"
			>
				<Paper radius="md" p="xl" miw={'400px'} withBorder shadow={'xl'}>
					<Title order={2} align={'center'}>
						{t('accounts.title')}
					</Title>
					<Outlet />
				</Paper>
			</Flex>
		</BackgroundImage>
	);
};
