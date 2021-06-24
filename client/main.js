import "@/assets/scss/main.scss";

import Vue from 'vue';
import router from './router'
import App from './App.vue';
import Axios from 'axios';
import VueGtag from "vue-gtag";
import VueGitHubButtons from 'vue-github-buttons';

// Stylesheet
import 'vue-github-buttons/dist/vue-github-buttons.css';

Vue.config.productionTip = false;
Vue.use(VueGtag, {
    config: { id: "UA-99972058-2" }
}, router);
Vue.use(VueGitHubButtons, { useCache: false });

//Axios.defaults.baseURL = "http://127.0.0.1:8080";
Vue.prototype.$axios = Axios;

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
