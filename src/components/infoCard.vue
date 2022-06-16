<template>
  <div class="infoBox flex flex-col items-center w-full bg-white shadow-md  hover:scale-105 hover:ease-in-out hover:duration-100">
    <div
      class="infoElement "
    >
      <img
        src="@/assets/vaccine.webp"
        class="  "
        alt=""
      />
    </div>
    <div
      class="infoElement p-3 font-bold text-2xl "
    >
      <a :href="link" target="_blank">{{ label }}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Info",
  props: {
    imgLink: String,
    label: String,
    link: String,
  },
};
</script>
