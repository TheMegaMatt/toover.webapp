import { Alert, Button, PasswordInput, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { auth, getErrorStringCode } from '@toover/firebase';
import React, { useMemo } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export type LoginFormValues = { email: string; password: string };

export default () => {
	const { t } = useTranslation();
	const [login, user, isLoading, error] = useSignInWithEmailAndPassword(auth);
	const navigate = useNavigate();
	const form = useForm<LoginFormValues>({
		validateInputOnBlur: true,
		validateInputOnChange: true,
		validate: {
			email(value) {
				if (!value) return t('accounts.login.email.required');
				if (!value.includes('@')) return t('accounts.login.email.invalid');
			},
			password(value) {
				if (!value) return t('accounts.login.password.required');
			},
		},
	});

	const isValid = useMemo(() => {
		return form.isValid() && !isLoading;
	}, [form, isLoading]);

	const handleSubmit = async ({ email, password }: LoginFormValues) => {
		const user = await login(email, password);
		if (user) {
			navigate('/app/home');
		}
	};

	return (
		<>
			<Title order={4} color={'dimmed'} my={'lg'} align={'center'}>
				{t('accounts.login.title')}
			</Title>

			{error && (
				<Alert mb={'lg'} color={'red'}>
					{t(getErrorStringCode(error))}
				</Alert>
			)}

			<form onSubmit={form.onSubmit(handleSubmit)}>
				<TextInput
					label={t('accounts.login.email.label')}
					placeholder={t('accounts.login.email.placeholder')!}
					disabled={isLoading}
					size="md"
					{...form.getInputProps('email')}
				/>
				<PasswordInput
					label={t('accounts.login.password.label')}
					placeholder={t('accounts.login.password.placeholder')!}
					disabled={isLoading}
					mt="md"
					size="md"
					{...form.getInputProps('password')}
				/>
				<Button
					fullWidth
					mt="xl"
					size="md"
					type={'submit'}
					loading={isLoading}
					disabled={!isValid}
				>
					{t('accounts.login.submit')}
				</Button>
			</form>
		</>
	);
};
