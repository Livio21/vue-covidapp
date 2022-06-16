<template>
  <div class="bg-white/80 dark:bg-green-500/50 backdrop-blur-md">
    <header
      v-click-outside="removeMobileNav"
      class=" "
      :class="{ 'scrolled-nav': scrolledNav }"
    >
      <nav  class="">
      <router-link to="/" title="Click to go Home.">
        <div class="branding mr-3 h-20">
          <font-awesome-icon
            class="dark:text-white hidden sm:block text-red-700"
            icon="virus-covid"
            size="3x"
            color=""
          />
          <!-- <img src="@/assets/virus-covid-solid.svg" alt=""> -->

          <span
            class="dark:text-white dark:font-light pl-3 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500 break-words mr-5 text-lg font-bold lg:text-3xl md:text-xl sm:text-xl"
            style="font-family: 'Sora', sans-serif"
            >Covid-19 Information & Tracking
          </span>
        </div>

      </router-link>
        <ul v-show="!mobile" class="navigation lg:text-l">
          <li
            class="hover:shadow-lg rounded-md hover:scale-105 active:scale-100 active:backdrop-brightness-90 cursor-pointer"
          >
            <router-link class="link" to="/" title="Home tab.">
              <a class="dark:text-white">Home</a>
            </router-link>
          </li>
          <li
            class="hover:shadow-lg rounded-md hover:scale-105 active:scale-100 active:backdrop-brightness-90 cursor-pointer"
          >
            <router-link
              
              class="link"
              to="/about"
              title="Information about Covid-19."
              ><a class="dark:text-white">About COVID-19</a>
            </router-link>
          </li>
          <li
            class="hover:shadow-lg rounded-md hover:scale-105 active:scale-100 active:backdrop-brightness-90 cursor-pointer"
          >
            <router-link
              class="link"
              to="/tracking"
              title="Show track data for Covid"
              ><a class="dark:text-white">Tracking</a>
            </router-link>
          </li>
          <li
            class="hover:shadow-lg rounded-md hover:scale-105 active:scale-100 active:backdrop-brightness-90 cursor-pointer"
          >
            <router-link
              class="link"
              to="/credits"
              title="Credits, tools used etc."
              ><a class="dark:text-white">Credits</a>
            </router-link>
          </li>
        </ul>

        <div class="icon absolute top-9 right-14">
          <font-awesome-icon
            @click="toggleMobileNav"
            v-show="mobile"
            class="icon-mobile dark:text-white text-black absolute top-0 sm:right-3 text-2xl"
            :class="{ 'icon-active': mobileNav, 'icon-notactive': !mobileNav }"
            icon="bars"
          />
        </div>
      </nav>
      <transition name="fade">
        <div
          v-show="mobileNav"
          class="flex px-5 justify-end text-center text-xl"
        >
          <ul
            @click="toggleMobileNav"
            class="dropdown-nav mb-5 w-1/2 dark:divide-y dark:text-white"
          >
            <li class="py-5 mt-5">
              <router-link class="link" to="/">Home</router-link>
            </li>
            <li class="py-5">
              <router-link class="link" to="/about">About Covid-19</router-link>
            </li>
            <li class="py-5">
              <router-link class="link" to="/tracking">Tracking</router-link>
            </li>
            <li class="py-5">
              <router-link class="link" to="/credits">Credits</router-link>
            </li>
          </ul>
        </div>
      </transition>
    </header>
  </div>
</template>
<script lang="js">
import vClickOutside from 'click-outside-vue3'


export default {
  name: "NavComponent",
  data(){
    return{
      //boolean for different actions and states of the page
      scrolledNav:null,//action after scrolling, changing the nav view
      mobile:null,//determine if its mobile view or not
      mobileNav:null,// determines if to show the mobile nav menu or not
      windowWidth:null,// window width

    };

  },
  created(){
    window.addEventListener('resize', this.checkScreen, { passive: true });
    this.checkScreen();
  },
  mounted(){
    this.popupItem = this.$el,
    window.addEventListener("scroll", this.updateScroll, { passive: true })
  },
  methods:{
    removeMobileNav(){
      this.mobileNav = false;
    },
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;

    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 768){
        this.mobile = true;
      }else{
        this.mobile = false;
        this.mobileNav = false;
      }
      return;
    },
    updateScroll(){
      const scrollPosition = window.scrollY;

      if(scrollPosition > 50){
        this.scrolledNav = true;
      }else{
        this.scrolledNav = false;

      }
      return;
    },

  },
  directives: {
        clickOutside: vClickOutside.directive,
    },

};
</script>

<style lang="scss" scoped>
.mobile-nav-enter-active {
  transition: all 0.3s ease-out;
}

.mobile-nav-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

header {
  width: 100%;

  nav {
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    transition: 0.5 ease all;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: rgb(0, 0, 0);
      list-style: none;
      text-decoration: none;
    }
    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link {
      transition: 0.5 ease all;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
      &:hover {
        // color: rgb(182, 22, 22);

        transition: all 0.7s;
        @media (prefers-color-scheme: dark) {
          border-color: rgb(255, 255, 255);
        }
      }
      &:active {
        scale: 105%;
      }
    }
    .branding {
      display: flex;
      align-items: center;
    }
    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    // .dropdown-nav{
    //   display: flex;
    //   flex-direction: column;
    //   padding: auto;
    //   width:100%;
    //   height:100%;
    //   max-width: 250px;
    //   background-color:rgba(255, 255, 255, 0.87);
    //   top: 0px;
    //   right: 0;

    //   li{
    //     margin-left: 0;
    //     .link{
    //       color: rgb(0, 0, 0);
    //     }
    //   }
    // }
    .icon-active {
      transition: 0.8s ease all;
      transform: rotate(180deg);
    }
    .icon-notactive {
      transition: 0.8s ease all;
      transform: rotate(360 deg);
    }
  }
}
.scrolled-nav {
  nav {
    padding: 8px 0;
    .branding {
      svg {
        width: 40px;
      }
    }
  }
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
