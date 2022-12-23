import { showNotification } from '@mantine/notifications';
import { getI18n } from 'react-i18next'
export function errorNotification(message: string) {
    const { t } = getI18n();
    showNotification({
        title: t('common.error'),
        message: message,
        color: 'red.4',
    });
}

export function successNotification(message: string) {
    const { t } = getI18n();
    showNotification({
        title: t('common.success'),
        message: message,
        color: 'green.4',
    });
}
