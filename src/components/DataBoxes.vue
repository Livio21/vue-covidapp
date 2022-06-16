<template>
  <div class="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 py-5">
    <!--- Infected ---->
    <div
      class="text-center bg-white py-10 mb-10 mx-10 rounded-lg shadow-lg dark:bg-zinc-800"
    >
      <h3 class="text-3xl text-red-600 font-bold mb-4">Infected</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold text-blue-500 dark:text-cyan-500">New:</span>
        <span class="px-3 dark:text-zinc-100"
          >{{ numberWithCommas(stats.NewConfirmed) }}
        </span>
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold dark:text-zinc-300">Total:</span>
        <span class="px-3 dark:text-zinc-100"
          >{{ numberWithCommas(stats.TotalConfirmed) }}
        </span>
      </div>
    </div>
    <!-- Recovered -->
    <div
      class="text-center bg-white py-10 mb-10 mx-10 rounded-lg shadow-lg dark:bg-zinc-800"
    >
      <h3 class="text-3xl text-green-600 font-bold mb-4">Recovered</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold text-blue-500 dark:text-cyan-500">New:</span>
        <span class="px-3 dark:text-zinc-100"
          >{{ numberWithCommas(stats.NewRecovered) }}
        </span>
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold dark:text-zinc-300">Total:</span>
        <span class="px-3 dark:text-zinc-100"
          >{{ numberWithCommas(stats.TotalRecovered) }}
        </span>
      </div>
    </div>
    <!--- Deaths ---->
    <div
      class="text-center md:col-span-2 lg:col-span-1 bg-white py-10 mb-10 mx-10 rounded-lg shadow-lg dark:bg-zinc-800"
    >
      <h3 class="text-3xl text-black font-bold mb-4 dark:text-white">Deaths</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold text-blue-500 dark:text-cyan-500">New:</span>
        <span class="px-3 dark:text-zinc-100"
          >{{ numberWithCommas(stats.NewDeaths) }}
        </span>
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold dark:text-zinc-400">Total:</span>
        <span class="px-3 dark:text-zinc-100"
          >{{ numberWithCommas(stats.TotalDeaths) }}
        </span>
      </div>
    </div>
    <div
      class="text-center md:col-span-2 lg:col-span-3 bg-white p-4 md:p-10mx-10 md:rounded-lg md:shadow-lg dark:invert"
    >
      <iframe
        class=""
        width="100%"
        height="500"
        title="Confirmed COVID–19 cases worldwide, per day"
        aria-label="Interactive area chart"
        id="datawrapper-chart-nwln6"
        src="https://datawrapper.dwcdn.net/nwln6/1/"
        scrolling="no"
        frameborder="0"
        style="border: none"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBoxes",
  props: ["stats"],
  methods: {
    //Function to put commas between numbers for better presentation using regex
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
