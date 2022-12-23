import { Flex, Loader, Title } from '@mantine/core';
import { auth } from '@toover/firebase';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default () => {
	const { t } = useTranslation();
	const [user, isLoading] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoading) {
			return;
		}
		if (!user) {
			navigate('/accounts/login');
		} else {
			navigate('/app/home');
		}
	}, [user, isLoading]);

	return (
		<Flex h={'100vh'} w={'100vw'} gap="md" justify="center" align="center" direction="row">
			<Flex
				mih={50}
				gap="md"
				justify="flex-start"
				align="center"
				direction="row"
				wrap="nowrap"
			>
				<Loader size={'lg'} />
				<Title order={3}>{t('app.loading')}</Title>
			</Flex>
		</Flex>
	);
};
