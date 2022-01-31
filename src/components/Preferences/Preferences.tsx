import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Preferences() {
    const { t } = useTranslation();
    return (
        <h2>{t('settings')}</h2>
    );
}