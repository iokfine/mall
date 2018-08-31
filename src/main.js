import 'iview/dist/styles/iview.css';
import Vue from 'vue';
import iView from 'iview';
import App from './app';
import {router} from './router'

Vue.use(iView);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
