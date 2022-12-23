import {
	Button,
	Flex,
	LoadingOverlay,
	SimpleGrid,
	SimpleGridBreakpoint,
	TextInput,
	useMantineTheme
} from '@mantine/core';
import {DisplayElement, Page} from '@toover/components';
import {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { LocationsCreate } from '../modals/locations-create';
import {useGetLocationsQuery} from "@toover/locations";
import {IconMapPin, IconSearch} from "@tabler/icons";
import {useDebouncedState} from "@mantine/hooks";
import {useForm} from "@mantine/form";

export default () => {
	const [opened, setOpened] = useState(false);
	const [name, setName] = useDebouncedState('', 2000)

	const { t } = useTranslation();
	const theme = useMantineTheme();
	const form = useForm<{name: string}>({
		initialValues: {
			name: '',
		},
		transformValues: (values) => {
			return {
				name: values.name.length > 3 ? values.name : undefined,
			} as any;
		}
	});

	useEffect(() => {
		setName(form.values.name)
	}, [form.values])

	const {data: locations, isLoading, isFetching} = useGetLocationsQuery({name});


	let breakpoints: SimpleGridBreakpoint[] = [
		{ minWidth: 'sm', cols: 1 },
		{ minWidth: 'md', cols: 2 },
		{ minWidth: 1200, cols: 3 },
	];

	return (
		<Page title={t('locations.list.title')}>
			<Flex direction={'column'} gap={'md'}>
				<Flex gap={"md"}>
					<TextInput sx={{flexGrow: 1}}
							   placeholder={t('locations.list.search.placeholder')!}
							   icon={<IconSearch />}
							   {...form.getInputProps('name')}
					/>
					<Button onClick={() => setOpened(true)}>Open modal</Button>
				</Flex>
				<SimpleGrid breakpoints={breakpoints} sx={{position: "relative"}}>
					<LoadingOverlay visible={isLoading || isFetching} />
					{locations?.items.map((location) => (<DisplayElement title={location.name} leftIcon={<IconMapPin color={theme.fn.primaryColor()} size={36} />}/>))}
				</SimpleGrid>
			</Flex>
			<LocationsCreate opened={opened} onClose={() => { setOpened(false) }} />
		</Page>
	);
};
