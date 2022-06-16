import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vClickOutside from "click-outside-vue3";
import VueAgile from "vue-agile";
import VueParticlesBg from "particles-bg-vue";
import VideoBackground from "vue-responsive-video-background-player";

library.add(fas);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component('video-background', VideoBackground)
  .use(router, vClickOutside, VueAgile, VueParticlesBg)
  .mount("#app");
