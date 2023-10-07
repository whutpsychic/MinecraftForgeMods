import './styles/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// ---------------------------- antd ----------------------------
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// ---------------------------- unicons ----------------------------
import unicon from 'vue-unicons';
import { uniMoon } from 'vue-unicons/dist/icons';


const app = createApp(App);
app.use(router);
// ---------------------------- antd ----------------------------
app.use(Antd);
// ---------------------------- unicons ----------------------------
unicon.add([uniMoon]);
app.use(unicon);



app.mount('#app');
