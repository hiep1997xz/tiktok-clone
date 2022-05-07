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
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

// nhung route can dang nhap moi xem dc
export const privateRoutes = [];
