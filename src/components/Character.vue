<template>
  <div>
    {{ character?.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Character as CharacterInterface } from "@/interfaces/Character";

export default defineComponent({
  name: "Character",
  props: {
    character: Object as () => CharacterInterface,
  },
  methods: {},
});
</script>

<style scoped>
div {
    
}
</style>
