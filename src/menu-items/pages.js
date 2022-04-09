// assets
import { IconKarate, IconUsers, IconBuildingWarehouse } from '@tabler/icons';

// constant
const icons = {
    IconKarate,
    IconUsers,
    IconBuildingWarehouse
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    // caption: '',
    type: 'group',
    children: [
        {
            id: 'customer',
            title: 'Customer',
            type: 'item',
            icon: icons.IconKarate,
            url: '/pages/customer',
            target: false
        },
        {
            id: 'group',
            title: 'Group',
            type: 'item',
            icon: icons.IconUsers,
            url: '/pages/group',
            target: false
        },
        {
            id: 'inventory',
            title: 'Inventory',
            type: 'item',
            icon: icons.IconBuildingWarehouse,
            url: '/pages/inventory',
            target: false
        },
        {
            // for future reference: this will give the option to login/regiter from the sidebar
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login',
                    target: false
                }
                //         {
                //             id: 'register3',
                //             title: 'Register',
                //             type: 'item',
                //             url: '/pages/register/register3',
                //             target: true
                //         }
            ]
        }
    ]
};

export default pages;
