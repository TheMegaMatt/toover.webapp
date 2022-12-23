import { Page } from '@toover/components';
import { useTranslation } from 'react-i18next';

export default () => {
	const { t } = useTranslation();
	return <Page title={t('locations.details.title')}></Page>;
};
