import mainLayoutComp from '@/views/layout/main'

export default [
  {
    path: '/',
    name: 'home',
    component: mainLayoutComp,
    children: [
      {
        path: '',
        component: () => import('@/views/Home')
      },
      {
        path: 'hello',
        component: () => import('@/views/Hello')
      }
    ]
  }
]
