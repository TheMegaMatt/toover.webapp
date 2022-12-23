import { Center, Loader, Title } from '@mantine/core';
import { sleep } from '@toover/core';
import { auth } from '@toover/firebase';
import React, { useEffect } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default () => {
	const { t } = useTranslation();
	const [signOut] = useSignOut(auth);
	const navigateTo = useNavigate();
	useEffect(() => {
		const doSignOut = async () => {
			await sleep(2000);
			const didLogout = await signOut();
			if (didLogout) {
				navigateTo('/accounts/login');
			}
		};
		doSignOut().catch(console.error);
	}, []);

	return (
		<>
			<Title order={4} color={'dimmed'} my={'lg'} align={'center'}>
				{t('accounts.logout.title')}
			</Title>

			<Center>
				<Loader size="lg" />
			</Center>
		</>
	);
};
