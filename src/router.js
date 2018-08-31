// 路由配置
import Util from "./libs/util";
import iView from "iview";
import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);


const RouterConfig = {
    mode: 'history',
    routes: [
        {
            path: '/',
            name:'home',
            meta: {title: '开始吧!'},
            component: (resolve) => require(['./views/index.vue'], resolve)
        },
        {
            path: '/main',
            name:'main',
            redirect:'/main/listing',
            component: (resolve) => require(['./views/main.vue'], resolve),
            children: [
                 {
                     path:"/main/listing",
                     name:'news',
                     meta: {title: '首页'},
                     component: (resolve) => require(['./views/front/listing.vue'], resolve),
                     /*children:[
                         {
                             path:"/front/ProductInfo",
                             name:'ProductInfo',
                             component: (resolve) => require(['./views/front/product.vue'], resolve),
                         }
                     ]*/
                 }
             ]
        },
        {
            path:'/login',
            meta:{title:'Login'},
            component:(resolve) => require(['./views/login.vue'], resolve)
        },
        {
            path:'/error',
            meta:{title:'页面未找到~'},
            component:(resolve) => require(['./views/errorPage/404.vue'], resolve)
        }
    ]
};
export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    if (to.matched.length ===0) {                                        //如果未匹配到路由
        from.name ? next({ name:from.name }) : next('/error');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    } else {
        next();                                                                            //如果匹配到正确跳转
    }
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
