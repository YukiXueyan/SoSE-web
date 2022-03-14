import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/IndexPage' },
    { path: '/testMode', component: '@/pages/index' },
    { path: '/game', component: '@/pages/IndexGame' },
    { path: '/review', component: '@/pages/ReviewPage' },
    { path: '/products', component: '@/pages/Products' },
    { path: '/endlessMode', component: '@/pages/IndexGame' },
    { path: '/endlessMode', component: '@/pages/IndexGame' },
    { path: '/info', component: '@/pages/InfoPage' },
  ],
  fastRefresh: {},
  alias: {
    "@": 'src',
  },
  mfsu:{}
});
