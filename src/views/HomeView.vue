<template>
  <main class=" flex flex-col mx-auto py-10">
    <div class="bg-green-700 mx-auto md:grid grid-cols-3 max-w-6xl ">
      <div class="col-span-2">
        <img
          src="@/assets/Topic_Banner_Coronavirus.webp"
          class="hidden md:block"
          alt=""
        />

        <div class="p-5">
          <p
            class="before:content-['☣'] before:animate-pulse before:text-6xl before:p-5 break-words text-lg text-white"
          >
            Learn about the types of assistance the Albanian government offers
            people and businesses affected by the COVID-19 pandemic.
          </p>
        </div>
      </div>
      <div class="col-span-1 p-10 bg-green-600  text-white"  title="Click the links to show more info." >
        <h2 class="text-2xl">How to...</h2>
        <ul class="list-disc my-5">
          <li class="hover:underline hover:scale-105 duration-300">
            <router-link class="link" to="/about"
              ><a class="animate-pulse">Know I have COVID-19</a>
            </router-link>
          </li>
          <li class="hover:underline hover:scale-105 duration-300">
            <router-link class="link" to="/about"
              ><a class="">Get a COVID-19 shot</a>
            </router-link>
          </li>
          <li class="hover:underline hover:scale-105 duration-300">
            <router-link class="link" to="/about"
              ><a class="">Get COVID-19 unemployment benefits</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
     <video-background 
    :src="require('@/assets/video.mp4')"
    overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)" 
    style="max-height: 400px; height: 100vh"
    class="my-10 hover:scale-105 ease-in-out duration-300 overflow-hidden"
     title="Covid-19 video." 
 >
    <h1 class="text-white text-center "></h1>
 </video-background>
    <router-link class="link max-w-6xl mx-auto shadow-2xl " title="Click to show more info." to="/about" >
    <div class="grid grid-cols-2 ">
      <div
        v-if="!mobile"
        class=" block col-span-2 md:col-span-1 shadow-xl md:order-first"
      >
        <agile
          id="pictures"
          ref="images"
          :nav-buttons="false"
          :autoplay-speed="10000"
          :speed="2000"
          :changeDelay="100"
          fade="fade"
          autoplay="autoplay"
        >
          <img
            class="slide "
            src="@/assets/Images/pexels-cdc-3993212.webp"
            alt="Virus"
          />
          <img
            class="slide "
            src="@/assets/Images/pexels-anna-shvets-3987146.webp"
            alt="Women using hand sanitiser"
          />
          <img
            class="slide "
            src="@/assets/Images/pexels-chokniti-khongchum-2280571.webp"
            alt="Lab"
          />
          <img
            class="slide "
            src="@/assets/Images/pexels-cottonbro-3952238.webp"
            alt="When will covid-19 end?"
          />
          <img
            class="slide "
            src="@/assets/Images/pexels-ivan-samkov-4240610.webp"
            alt="Work from home."
          />
        </agile>
      </div>
      <div
        class="flex flex-col justify-center bg-white/90 col-span-2 md:col-span-1 p-5  backdrop-blur-sm dark:bg-zinc-700 dark:text-white"
      >
        <agile
          ref="info"
          class=""
          :nav-buttons="false"
          :autoplay-speed="10000"
          :speed="2500"
          autoplay="autoplay"
          :centerMode="true"
        >
          <div class="">
            <h1
              class="before:content-['◀'] before:text-red-500 text-2xl font-bold"
            >
              Info about Covid
            </h1>
            <p class="text-xl p-3 break-words">
              Coronavirus disease (COVID-19) is an infectious disease caused by
              the SARS-CoV-2 virus.
              <br />
              Most people infected with the virus will experience mild to
              moderate respiratory illness and recover without requiring special
              treatment. However, some will become seriously ill and require
              medical attention.
            </p>
          </div>
          <div class="">
            <h1
              class="before:content-['◀'] before:text-blue-500 text-2xl font-bold"
            >
              Prevention
            </h1>
            <p class="text-xl p-3 break-words">
              The best way to prevent and slow down transmission is to be well
              informed about the disease and how the virus spreads. <br />
              Protect yourself and others from infection by staying at least 1
              metre apart from others, wearing a properly fitted mask, and
              washing your hands or using an alcohol-based rub frequently.
            </p>
          </div>
          <div class="">
            <h1
              class="before:content-['◀'] before:text-green-500 text-2xl font-bold"
            >
              Do you have COVID-19?
            </h1>
            <p class="text-xl p-3 break-words">
              COVID-19 affects different people in different ways. Most infected
              people will develop mild to moderate illness and recover without
              hospitalization. <br />
              <br />
              Most common symptoms: <br />- fever <br />- cough <br />-
              tiredness <br />- loss of taste or smell.
            </p>
          </div>
          <div class="">
            <h1
              class="before:content-['◀'] before:text-orange-500 text-2xl font-bold"
            >
              Are there long-term effects of COVID-19?
            </h1>
            <p class="text-xl p-3 break-words">
              Some people who have had COVID-19, whether they have needed
              hospitalization or not, continue to experience symptoms, including
              fatigue, respiratory and neurological symptoms. WHO is working to
              design and carry out studies of patients beyond the initial acute
              course of illness to understand the proportion of patients who
              have long term effects, how long they persist, and why they occur.
            </p>
          </div>
          <div class="">
            <h1
              class="before:content-['◀'] before:text-cyan-500 text-2xl font-bold"
            >
              A new normal:
            </h1>
            <p class="text-xl p-3 break-words">
              Working from home When the pandemic hit the World hard in March,
              millions of workers began working from home – an unprecedented and
              ongoing phenomenon “facilitated by the rise of connectivity and
              communication technologies.
            </p>
          </div>
        </agile>
      </div>
    </div>
      </router-link>
  </main>
</template>

<script lang="js">
import infoCard from '@/components/infoCard.vue';
import { VueAgile } from 'vue-agile'
import VideoComponent from '@/components/videoComponent.vue';



export default {
  name: "Home",
  components: { infoCard,
  agile: VueAgile, VideoComponent
  },
  data () {
      return {
        currentSlide: 0,
        mobile: null
      }
    },
    methods:{
      checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 640) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
      return;
    },
    },
    created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

};
</script>

<style lang="scss" scoped>
#pictures img{
  max-height: 512px;
  width: auto;
}
.agile__dots {
  bottom: 10px;
  flex-direction: column;
  right: 30px;
  position: absolute;
}
.agile__dot {
  margin: 5px 0;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #fff;
}

.slide {
  display: block;
  height: 500px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}


</style>
