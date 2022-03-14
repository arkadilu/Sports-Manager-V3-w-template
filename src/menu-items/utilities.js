// assets
import { IconReportAnalytics, IconReportMoney } from '@tabler/icons';

// constant
const icons = {
    IconReportAnalytics,
    IconReportMoney
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'reports',
    title: 'Reports',
    type: 'group',
    children: [
        {
            id: 'report-attendance',
            title: 'Attendance',
            type: 'item',
            url: '/report/attendance',
            icon: icons.IconReportAnalytics,
            breadcrumbs: false
        },
        {
            id: 'report-payments',
            title: 'Payments',
            type: 'item',
            url: '/report/payments',
            icon: icons.IconReportMoney,
            breadcrumbs: false
        }
        /*  ,{
            id: 'icons',
            title: 'Icons',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }   */
    ]
};

export default utilities;
