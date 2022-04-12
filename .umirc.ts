import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/testMode', component: '@/pages/index' },
        { path: '/game', component: '@/pages/IndexGame' },
        { path: '/review', component: '@/pages/ReviewPage' },
        { path: '/products', component: '@/pages/Products' },
        { path: '/endlessMode', component: '@/pages/IndexGame' },
        { path: '/info', component: '@/pages/InfoPage' },
        { path: '/admin', component: '@/pages/AdminPage' },
        { path: '/admin/detail', component: '@/pages/AdminDetailPage' },
        { path: '/', component: '@/pages/IndexPage' },
      ],
    },
    // { path: '/testMode', component: '@/pages/index' },
    // { path: '/game', component: '@/pages/IndexGame' },
    // { path: '/review', component: '@/pages/ReviewPage' },
    // { path: '/products', component: '@/pages/Products' },
    // { path: '/endlessMode', component: '@/pages/IndexGame' },
    // { path: '/info', component: '@/pages/InfoPage' },
    // { path: '/', component: '@/pages/IndexPage' },
    { component: '@/pages/404' }, // 配置404
  ],
  fastRefresh: {},
  alias: {
    '@': 'src',
  },
  mfsu: {},
  title: '软件工程物语',
  links: [{ rel: 'icon', href: '@/assets/gameIcon' }],
  404: true,
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
});
