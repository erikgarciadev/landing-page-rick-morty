<template>
  <div class="wrapper-characters">
    <div class="container">
      <Character
        v-for="character in characters"
        :key="character.id"
        :character="character"
      >
      </Character>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCharacters } from "@/services/characterService";
import { Character as CharacterInterface } from "@/interfaces/Character";
import Character from "./Character.vue";

export default defineComponent({
  name: "CharacterList",
  props: {},
  components: {
    Character,
  },
  data() {
    return {
      characters: [] as CharacterInterface[],
    };
  },
  methods: {
    async loadCharacters() {
      const res = await getCharacters();
      this.characters = res.data.results;
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
.wrapper-characters {
  height: calc(100vh - 100px);
  /* background: red; */
  padding-top: 2em;
}
</style>
