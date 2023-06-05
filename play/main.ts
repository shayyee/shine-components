import { createApp } from "vue";
import App from "./app.vue";
import demoui from "@demo-ui/components";
const app = createApp(App);
app.use(demoui);
app.mount("#app");
