export enum Routes {
    LOGIN = '/login',
    HOME = '/home',
    EMPLOYEE = '/employee',
    WORKDAYS = '/workdays',
    SALARY = '/salary',
    EMAIL = '/email',
    REPORT = '/report',
    PORTAL = '/portal',
    SUPPORT_CTKV = '/support-ctkv',
    SUPPORT_VNCERT = '/support-vncert',
    CSKH = '/cskh',
    SETTING = '/setting'

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
