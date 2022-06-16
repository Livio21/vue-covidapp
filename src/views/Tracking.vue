<template>
<div class="py-10 max-w-6xl">
    <div v-if="!loading" >
       <div class="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-zinc-500 dark:text-zinc-100 ">{{title}}</div>
      <CountrySelect @get-country="getCountryData" :countries="countries" />
  
  
      <DataTitle :dataDate="dataDate" />
      <DataBoxes :stats="stats" class="" />
      <button
        v-if="stats.Country"
        class="
          block
            mr-auto
            ml-auto
          bg-slate-800
          text-white
          rounded
          p-3
          mt-10
          focus:outline-none
          hover:bg-gray-700
          mb-10
          
        "
        @click="clearCountryData"
      >
        Clear Selection
      </button>
  
    </div>
    <div class="flex flex-col align-center justify-center text-center" v-else>
      <div class="text-gray-500 mb-6 mt-10 text-3xl">Getting Data</div>
      <img :src="loadingImage" class="w-24 m-auto" alt="hourglass" />
    </div>
    

</div>
</template>

<script>
import DataTitle from "@/components/DataTitle";
import DataBoxes from "@/components/DataBoxes";
import CountrySelect from "@/components/CountrySelect";
export default {
  name: "Home",
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
  },
  data() {
    return {
      loading: true,
      title: "Global Data",
      dataDate: "",
      stats: {},
      countries: [],
      loadingImage: require("../assets/loading.gif"),
    };
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = res.json();
      return data;
      
    },
    getCountryData(country) {
      this.stats = country;
      
      this.title = country.Country + "'s Covid-19 Data";
    },
    async clearCountryData() {
      this.loading = true;
      const data = await this.fetchCovidData();
      this.title = "Global Data";
      this.stats = data.Global;
      this.loading = false;
    },
  },
  async created() {
    const data = await this.fetchCovidData();
    this.dataDate = data.Date;
    this.stats = data.Global;
    console.log(this.stats);
    this.countries = data.Countries;
    this.loading = false;
    
  },
};
</script>