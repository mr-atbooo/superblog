import AdminHome from './components/admin/AdminHome';
import CatsList from './components/category/list';
import Catsnew from './components/category/new';
import PostList from './components/post/list';
const routes = [
    { path: '/', component: AdminHome },
    { path: '/cats', component: CatsList },
    { path: '/cats/create', component: Catsnew },
    { path: '/post-list', component: PostList }
];

export default routes;
