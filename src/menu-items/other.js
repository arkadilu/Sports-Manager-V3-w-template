// assets
import { IconUserPlus } from '@tabler/icons';

// constant
const icons = { IconUserPlus };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'reports-section',
    type: 'group',
    children: [
        {
            id: 'new-customer',
            title: 'Create Customer',
            type: 'item',
            url: '/pages/customer/n',
            icon: icons.IconUserPlus,
            breadcrumbs: false
        },
        {
            id: 'new-group',
            title: 'Create Group',
            type: 'item',
            url: '/pages/group/n',
            icon: icons.IconUserPlus,
            breadcrumbs: false
        },
        {
            id: 'update-inventory',
            title: 'Update Inventory',
            type: 'item',
            url: '/pages/inventory/u',
            icon: icons.IconUserPlus,
            breadcrumbs: false
        }
    ]
};

export default other;
