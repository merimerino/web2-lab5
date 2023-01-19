import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import EuroHrkConverter from "./components/EuroHrkConverter.vue";
import ConversionTitle from "./components/ConversionTitle.vue";
import ExchangeRate from "./components/ExchangeRate.vue";

const app = createApp(App);
app.component("euro-hrk-converter", EuroHrkConverter);
app.component("conversion-title", ConversionTitle);
app.component("exchange-rate", ExchangeRate);

app.use(router);
app.mount("#app");
