import {
	IconClipboardTypography,
	IconDevices2,
	IconHome,
	IconMapPins,
	IconSettingsAutomation,
	IconUsers,
} from '@tabler/icons';

export default (t: (key: string) => string) => [
	{ link: '/app/home', label: t('app.nav.home'), icon: IconHome },
	{ link: '/app/items', label: t('app.nav.items'), icon: IconDevices2 },
	{ link: '/app/employees', label: t('app.nav.employees'), icon: IconUsers },
	{ link: '/app/locations', label: t('app.nav.item-locations'), icon: IconMapPins },
	{
		link: '/app/types',
		label: t('app.nav.item-types'),
		icon: IconClipboardTypography,
	},
	{
		link: '/app/settings',
		label: t('app.nav.settings'),
		icon: IconSettingsAutomation,
	},
];
