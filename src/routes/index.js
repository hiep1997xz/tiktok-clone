import routesConfig from '~/config/routes';

// layout
import { HeaderOnly } from '~/components/Layout';

// pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// nhung route k can dang nhap van xem dc
export const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];

// nhung route can dang nhap moi xem dc
export const privateRoutes = [];
