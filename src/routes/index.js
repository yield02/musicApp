import Home from '~/pages/Home';
import MyMusic from '~/pages/MyMusic';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/mymusic', component: MyMusic },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
