import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
    const { t } = useTranslation();
    return (
        <>
            <h2>{t('ttlink1')}</h2>
        </>
    );
}