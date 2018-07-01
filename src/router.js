export const loginRouter = {
    path: '/hello',
    meta: {
        title: 'IOVE'
    },
    component: (resolve) => require(['./views/hello.vue'], resolve)
};
const routers = [
    {
        path: '/',
        meta: {
            title: '电子竞技,没有休息'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    loginRouter,
    {
        path:'/login',
        meta:{
            title:'Login'
        },
        component:(resolve) => require(['./views/login.vue'], resolve)
    }
];
export default routers;