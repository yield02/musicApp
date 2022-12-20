import Home from '~/pages/Home';
import MyMusic from '~/pages/MyMusic';
import ZingChart from '~/pages/ZingChart';
import Radio from '~/pages/Radio';
import Follow from '~/pages/Follow';
import NewMusic from '~/pages/NewMusic';
import TypeMusic from '~/pages/TypeMusic';
import TopMusic from '~/pages/TopMusic';
import MVMusic from '~/pages/MVMusic';
import routes from '~/config/routes';

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.mymusic, component: MyMusic },
    { path: routes.zingchart, component: ZingChart },
    { path: routes.radio, component: Radio },
    { path: routes.follow, component: Follow },
    { path: routes.newmusic, component: NewMusic },
    { path: routes.typemusic, component: TypeMusic },
    { path: routes.topmusic, component: TopMusic },
    { path: routes.mvmusic, component: MVMusic },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
