<template>
  <div class="desktop flex flex-row dark:text-white">
    <div v-if="mobile" class="flex-none fixed top-24 left-0">
      <button
        @click="toggleNav()"
        v-show="!showNav"
        class="bg-green-500 dark:bg-green-900 w-14 h-14 rounded-br-md shadow-md z-20"
        :class="{ 'scrolled-button': scrolledBttn }"
      >
        <a class="text-white animate-pulse"> ⪢ </a>
      </button>
      <nav
        v-if="showNav"
        v-click-outside="toggleNav"
        class="bg-zinc-50/80 backdrop-blur-sm p-5 overflow-y-auto overflow-x-hidden w-72 dark:bg-zinc-800/90 py-10 shadow-md rounded-br-md"
      >
        <span class="text-xl font-bold">Q&A</span>
        <ul v-for="info in content" class="py-2">
          <li
            @click="
              currId = info.sys.id;
              closeNav();
            "
            class="text-center text-sm hover:cursor-pointer hover:bg-white hover:scale-105 hover:shadow-lg active:border-l-4 active:scale-100 dark:active:bg-zinc-800 active:bg-zinc-200 p-2 active:border-green-500 dark:hover:bg-zinc-700 duration-200"
          >
            {{ info.title }}
          </li>
        </ul>
      </nav>
    </div>
    <div v-if="!mobile" class="flex-none basis-1/4">
      <nav
        class="bg-zinc-50/80 sticky top-24 left-0 backdrop-blur-sm p-5 overflow-y-auto overflow-x-hidden w-72 dark:bg-zinc-800 py-10 shadow-md rounded-br-md"
      >
        <span class="text-xl font-bold">Q&A</span>
        <ul v-for="info in content" class="py-2">
          <li
            @click="currId = info.sys.id"
            class="text-center text-sm hover:cursor-pointer hover:bg-white hover:scale-105 hover:shadow-lg active:border-l-4 active:scale-100 dark:active:bg-zinc-800 active:bg-zinc-200 p-2 active:border-green-500 dark:hover:bg-zinc-700"
            :title="info.title"
          >
            {{ info.title }}
          </li>
        </ul>
      </nav>
    </div>
    <div class="pt-10 bg-white dark:bg-inherit">
      <TransitionGroup name="slide-fade">
        <div
          class="p-5 dark:text-white"
          v-for="info in filterID(content, currId)"
          :key="info"
        >
          <h1 class="break-words font-bold text-center text-2xl">
            {{ info.title }}
          </h1>
          <img
            :src="info.image.url"
            class="max-w-xs mx-auto m-3 shadow-lg sm:hover:scale-105 duration-300"
            :alt="info.title"
            :title="info.title"
          />
          <div class="break-words p-3" v-html="info.text"></div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>
<script>
import vClickOutside from "click-outside-vue3";

export default {
  name: "aboutMenu",
  components: {
    // VueMarkdown
  },
  data() {
    return {
      showNav: null,
      mobile: null,
      scrolledBttn: null,
      infos: [],
      currId: ["43X76rKpZuWnTcC4d8kBD8"],
    };
  },
  props: ["content", "idArr"],

  methods: {
    filterID: function (items, idTest) {
      return items.filter(function (item) {
        return item.sys.id == idTest;
      });
    },
    toggleNav() {
      this.showNav = !this.showNav;
      // console.log(this.showNav);
    },
    closeNav() {
      const timeout = 100;
      setTimeout(() => {
        this.showNav = false;
      }, timeout);
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 860) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
      return;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        this.scrolledBttn = true;
      } else {
        this.scrolledBttn = false;
      }
      return;
    },
    test(array, array1) {
      if ((array = 0)) {
        array = array1[0];
      }
      console.log(array1[0]);
      return array;
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll, { passive: true });
    this.updateScroll();
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.scrolled-button {
  width: 28px;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
