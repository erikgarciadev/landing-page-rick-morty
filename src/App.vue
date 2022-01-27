<template>
  <Navbar />
  <CharacterList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CharacterList from "./components/CharacterList.vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    CharacterList,
    Navbar,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em;
}

:root {
  --shadow: 0px 1px 10px #999;
}
</style>
