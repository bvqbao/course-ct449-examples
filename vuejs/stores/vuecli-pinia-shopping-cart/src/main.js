import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

createApp(App)
	.use(createPinia())
	.mount("#app");
