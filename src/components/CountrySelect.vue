<template>
  <select
    @change="onChange()"
    v-model="selected"
    class="form-select mt-10 block ml-auto mr-auto w-50 h-15 cursor-pointer border-none bg-white dark:bg-gray-500 dark:hover:bg-gray-300  p-3 rounded mb-10"
  >
    <option value="0">Select Country</option>
    <option v-for="country in countries" :value="country.ID">
      {{ country.Country }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CountrySelect",
  props: ["countries"],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    onChange() {
      const country = this.countries.find((item) => item.ID === this.selected);
      this.$emit("get-country", country);
    },
  },
};
</script>
