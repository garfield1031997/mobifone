export enum Routes {
    LOGIN = '/login',
    HOME = '/pages/home',
    EMAIL = '/pages/email',
    REPORT = '/pages/report',
    PORTAL = '/pages/portal',
    SUPPORT_CTKV = '/pages/support-ctkv',
    SUPPORT_VNCERT = '/pages/support-vncert',
    CSKH = '/pages/cskh',
    SETTING = '/pages/setting'

}

export const RoutesLink = [
    {
        path: Routes.HOME,
        name: 'Trang chủ',
        icon: 'assets/svg/icon-home.svg'
    },
    {
        path: Routes.PORTAL,
        name: 'Cổng thông tin',
        icon: 'assets/svg/icon-port.svg'
    },
    {
        path: Routes.SUPPORT_VNCERT,
        name: 'Hỗ trợ VNCERT',
        icon: 'assets/svg/icon-VNCERT.svg'
    },
    {
        path: Routes.CSKH,
        name: 'Trang CSKH',
        icon: 'assets/svg/icon-cskh.svg'
    },
    {
        path: Routes.SETTING,
        name: 'Cài đặt',
        icon: 'assets/svg/icon-setting.svg'
    }
    

   
];
