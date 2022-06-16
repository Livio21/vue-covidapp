<template>
  <div id="app" class="" :class="{ dark: darkmode }">
    <Loading></Loading>
    <div
      class="bg-gradient-to-b from-zinc-500/10 to-zinc-600/2 dark:bg-zinc-900"
    >
      <NavComponent class="sticky top-0 shadow-lg z-50" />
      <!-- <router-view class="w-full min-h-screen mx-auto" /> -->
      <router-view v-slot="{ Component }" class="w-full min-h-screen mx-auto">
        <Transition name="fade" appear>
          <component :is="Component" />
        </Transition>
      </router-view>
      <div
        class="sticky bottom-3 float-right dark:bg-zinc-700 bg-white w-fit p-3 rounded-lg m-3 opacity-30 hover:opacity-100 hidden sm:block"
      >
        <div
          class="before:content-['Toggle_Dark_Mode:'] dark:before:text-white before:px-3 dark:mb-0 mb-3"
          title="Switch between Dark/Light Mode."
        >
          <Toggle
            v-model="darkmode"
            on-Label="On"
            off-label="Off"
            :classes="{
              container:
                ' inline-block rounded-full outline-none focus:ring focus:ring-green-500 focus:ring-opacity-30',
              toggle:
                'flex w-12  h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
              toggleOn:
                'bg-green-500 border-green-500 justify-start text-white',
              toggleOff:
                'bg-gray-200 border-gray-200 justify-end text-gray-700',
              toggleOnDisabled:
                'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
              toggleOffDisabled:
                'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
              handle:
                'inline-block bg-white w-5 h-5 top-0 rounded-full absolute transition-all',
              handleOn: 'left-full transform -translate-x-full',
              handleOff: 'left-0',
              handleOnDisabled:
                'bg-gray-100 left-full transform -translate-x-full',
              handleOffDisabled: 'bg-gray-100 left-0',
              label: 'text-center w-8 border-box whitespace-nowrap select-none',
            }"
          />
        </div>
        <div
          class="dark:hidden before:content-['Toggle_Particles:'] dark:before:text-white before:px-3"
          title="Enable background particles (may impact performance)."
        >
          <Toggle
            v-model="showParticles"
            on-Label="On"
            off-label="Off"
            :classes="{
              container:
                ' inline-block rounded-full outline-none focus:ring focus:ring-green-500 focus:ring-opacity-30',
              toggle:
                'flex w-12  h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
              toggleOn:
                'bg-green-500 border-green-500 justify-start text-white',
              toggleOff:
                'bg-gray-200 border-gray-200 justify-end text-gray-700',
              toggleOnDisabled:
                'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
              toggleOffDisabled:
                'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
              handle:
                'inline-block bg-white w-5 h-5 top-0 rounded-full absolute transition-all',
              handleOn: 'left-full transform -translate-x-full',
              handleOff: 'left-0',
              handleOnDisabled:
                'bg-gray-100 left-full transform -translate-x-full',
              handleOffDisabled: 'bg-gray-100 left-0',
              label: 'text-center w-8 border-box whitespace-nowrap select-none',
            }"
          />
        </div>
      </div>
      <pageFooter class="dark:bg-green-800" />
    </div>
    <particles-bg
      class="dark:hidden"
      v-show="showParticles & !darkmode"
      color="#ff0000"
      type="custom"
      :config="config"
      :bg="true"
    />
  </div>
</template>
<script lang="js">
import NavComponent from "./components/NavComponent.vue";
import pageFooter from "./components/pageFooter.vue";
import { ParticlesBg } from "particles-bg-vue";
import icon from "@/assets/R.webp"
import Toggle from '@vueform/toggle'
import Loading from "./components/loading.vue";





export default {
  name: "App",
  components: {
    NavComponent,
    pageFooter,
    ParticlesBg,
    Toggle,
    Loading
},
  data(){
    return {
      showParticles: true,
      mobile: null,
      darkmode: false,

      config: {
        num: [1, 1],
        rps: 0.5,
        radius: [4, 4],
        life: [1, 3],
        v: [1, 1],
        tha: [-30, 20],
        body: icon,
        alpha: [0.2, 0.3],
        scale: [0.1, 0.4],
        position: "all",
        cross: "dead",
        random: 1
      }
    };

  },
  methods:{
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 768){
        this.mobile = true;
        this.showParticles = false;
      }else{
        this.mobile = false;
        this.showParticles = true;
      }
      return;
    },
    enableDarkMode(){

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.darkmode = true;
      }
    }
  },
  mounted(){
    this.enableDarkMode();
  },
  created(){
    window.addEventListener('resize', this.checkScreen ,{ passive: true });
    this.checkScreen();
  },


};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
* {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
