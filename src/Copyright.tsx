import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { useTranslation } from 'react-i18next';

export default function Copyright() {
    const { t } = useTranslation();
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {t("copyright")}
            {' '}
            <MuiLink color="primary" href={t("url")} underline="none">
                {t("appname")}
            </MuiLink>{' '}
            {t("copyright_year")}.
        </Typography>
    );
}