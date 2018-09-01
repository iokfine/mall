// 路由配置
import Util from "./libs/util";
import iView from "iview";
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const errorPages404 = {
    path: '/error',
    meta: {title: '页面未找到~'},
    component: (resolve) => require(['./views/errorPage/404.vue'], resolve)
}


const RouterConfig = {
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
            component: (resolve) => require(['./views/main.vue'], resolve),
            children: [
                {
                    path: "/home",
                    name: 'home',
                    meta: {title: 'home'},
                    component: (resolve) => require(['./views/front/home.vue'], resolve),
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            meta: {title: 'login'},
            component: (resolve) => require(['./views/login.vue'], resolve)
        },
        errorPages404,
    ]
};
export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    if (to.matched.length === 0) {                                        //如果未匹配到路由
        from.name ? next({name: from.name}) : next('/error');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    } else {
        next();                                                                            //如果匹配到正确跳转
    }
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
