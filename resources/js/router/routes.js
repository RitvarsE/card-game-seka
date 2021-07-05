const routes =[
    {
        path: '/test1',
        component: () => import('../components/test'),
        name: 'home'
    },
    {
        path: '/test2',
        component: () => import('../components/test2'),
        name: 'test2'
    },
]
export default routes;
