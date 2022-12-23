import { Button, Flex, LoadingOverlay, Modal, Stack, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import {} from "@toover/mantine";

import {useMemo, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { LocationFormValues } from '../models';
import {useCreateLocationMutation} from "../api";
import {errorNotification, successNotification} from "../../../../libs/mantine/src/notifications";

type ModalProps = {
	opened: boolean;
	onClose: () => void;
};

export const LocationsCreate = (props: ModalProps) => {
	const { t } = useTranslation();
	const [loading, setLoading] = useState(false);
	const form = useForm<LocationFormValues>({
		initialValues: {
			name: '',
		},
	});

	const isValid = useMemo(() => {
		return form.isValid() && !loading;
	}, [form, loading]);

	const [createLocation, { isLoading: isCreating }] = useCreateLocationMutation();
	const handleCancel = () => props.onClose();
	const handleSubmit = async (values: LocationFormValues) => {
		try {
			await createLocation(values).unwrap();
			successNotification(t('locations.create.success'));
		} catch (e: any) {
			errorNotification(e.data.message);
		} finally {
			props.onClose();
		}
	};

	const title = <Title order={2}>{t('locations.create.title')}</Title>;
	return (
		<Modal {...props} centered size={'lg'} overlayOpacity={0.33} overlayBlur={2} title={title}>
			<LoadingOverlay visible={loading || isCreating} />
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Stack>
					<Flex direction={'column'} gap={'lg'}>
						<TextInput
							label={t('locations.form.name.label')}
							description={t('locations.form.name.description')}
							placeholder={t('locations.form.name.placeholder')}
							withAsterisk
							{...form.getInputProps('name')}
						/>
					</Flex>
					<Flex gap={'lg'} justify={'end'} align={'flex-end'}>
						<Button variant={'subtle'} onClick={handleCancel}>
							{t('locations.create.actions.cancel')}
						</Button>
						<Button type={'submit'}>{t('locations.create.actions.confirm')}</Button>
					</Flex>
				</Stack>
			</form>
		</Modal>
	);
};
