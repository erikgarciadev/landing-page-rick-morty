<template>
  <div>
    <div class="container">
      <div class="wrapper-characters">
        <Character
          v-for="character in characters"
          :key="character"
          :character="character"
        >
        </Character>
      </div>
      <div class="wrapper-pagination">
        <Pagination
          v-if="pages > 1"
          :onPage="onPage"
          :pages="pages"
          :page="page"
          :prevActive="page > 1"
          :nextActive="pages !== page"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCharacters } from "@/services/characterService";
import { Character as CharacterInterface } from "@/interfaces/Character";
import Character from "./Character.vue";
import Pagination from "./Pagination/index.vue";

export default defineComponent({
  name: "CharacterList",
  props: {},
  components: {
    Character,
    Pagination,
  },
  data() {
    return {
      characters: [] as CharacterInterface[],
      page: 1 as number,
      pages: 0 as number,
    };
  },
  methods: {
    async loadCharacters() {
      const res = await getCharacters();
      this.characters = res.data.results;
      console.log(res.data);
      this.pages = res.data.info.pages;
    },
    async onPage(page: number) {
      const res = await getCharacters(page);
      this.characters = res.data.results;
      this.page = page;
      this.pages = res.data.info.pages;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.loadCharacters();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.wrapper-pagination {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
}

/**320px - 480px */
.wrapper-characters {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-top: 3em;
  padding-bottom: 3em;
  gap: 20px;
  min-height: calc(100vh - 100px);
}

@media screen and (max-width: 768px) {
  .wrapper-characters {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .wrapper-characters {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1025px) {
  .wrapper-characters {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
