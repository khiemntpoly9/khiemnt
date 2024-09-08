import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import en from './lang/en.json';
import vi from './lang/vi.json';
import App from './App.vue';
import router from './router/index';

const i18n = createI18n({
	// something vue-i18n options here ...
	locale: 'vi',
	messages: {
		en: en,
		vi: vi,
	},
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
// createApp(App).use(router).use(i18n).mount('#app');
