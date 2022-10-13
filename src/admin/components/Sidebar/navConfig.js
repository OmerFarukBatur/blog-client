// component
import Iconify from '../common/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'blog dashboard',
    path: '/baselayout/home',
    icon: getIcon('ant-design:home-filled'),
  },
  {
    title: 'blog posts',
    path: '/baselayout/blog',
    icon: getIcon('file-icons:postscript'),
  },
  {
    title: 'add new post',
    path: '/baselayout/add-new-post',
    icon: getIcon('ant-design:file-add-twotone'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
