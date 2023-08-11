/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout/index.vue';

export default {
  path: '/adminAuth',
  component: Layout,
  redirect: '/adminAuth/adminList',
  alwaysShow: true, // will always show the root menu
  name: 'adminAuth',
  meta: {
    title: '权限管理',
    icon: 'permission'
  },
  children: [
    {
      path: '/adminAuth/adminList',
      component: () => import('@/views/permissions-page/accountList.vue'),
      name: 'adminList',
      meta: { title: '账号列表', icon: 'personnel' }
    },
    {
      path: '/adminAuth/permissionList',
      component: () => import('@/views/permissions-page/permissionList.vue'),
      name: 'permissionList',
      meta: { title: '权限列表', icon: 'permission' }
    },
    {
      path: '/account/detail',
      name: 'accountDetail',
      component: () => import('@/views/permissions-page/accountDetail.vue'),
      meta: { title: '账号详情', icon: 'personnel' },
      hidden: true //true不显示在侧边栏
    }
  ]
};