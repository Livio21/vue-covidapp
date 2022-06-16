<template>
  <div class="max-w-6xl">
    <aboutMenu :idArr="idS" :content="infos"></aboutMenu>
  </div>
</template>
<script>
import aboutMenu from "@/components/aboutMenu.vue";

export default {
  name: "about",
  components: {
    aboutMenu,
  },
  data() {
    return {
      infos: [],
      idS: [],
    };
  },

  methods: {
    async getData() {
      const query = `{

        infoPostCollection {
          items {
            sys {
              id
            }
            image{
              url
            }
            text
            title
          }
        }

      }`;

      // const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/`+ process.env.VUE_APP_CONTENTFUL_SPACE_ID;
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/fzzrfks6rhgk`;

      const fetchOptions = {
        method: "POST",
        headers: {
          // Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
          Authorization: "Bearer dcGIdydy63JKcEQq9Siu-0DBbsTEg2yvxRB8pDGyrR4",

          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      };

      try {
        const response = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json()
        );
        // console.log(response.data.infoPostCollection.items);
        return response.data.infoPostCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    },
    filterID: function (items, idTest) {
      return items.filter(function (item) {
        return item.sys.id == idTest;
      });
    },
  },

  async created() {
    this.infos = await this.getData();
    // const sys = this.infos.map(x => x.sys)
    // this.idS = sys.map(x => x.id)

    // console.log(this.idS);
  },
};
</script>

