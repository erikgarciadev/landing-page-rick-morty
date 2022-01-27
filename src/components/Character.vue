<template>
  <div class="card">
    <div>
      <img :src="character.image" alt="avatar" />
    </div>
    <div class="card--body">
      <h3>{{ character?.name }}</h3>
      <div class="group--status">
        <div :class="[{ status: true }, character.status]"></div>
        <p>{{ character?.status }}</p>
        <p>-</p>
        <p>{{ character?.gender }}</p>
      </div>
      <div class="text--group">
        <span>Origen:</span>
        <p>{{ character?.origin?.name }}</p>
      </div>
    </div>
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
.card {
  box-shadow: 0px 1px 5px #999;
  border-radius: 20px;
  /* background: rgb(60, 62, 68); */
  /* height: 200px; */
}

h3 {
  text-align: center;
  margin-bottom: 10px;
  color: rgb(60, 62, 68);
}

h3:hover {
  color: orange;
}

.group--status {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: rgb(60, 62, 68);
}

.status {
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
}

.Alive {
  background: green;
}

.unknown {
  background: rgb(158, 158, 158);
}

.card--body {
  color: white;
  padding: 1em;
  text-align: start;
}

.text--group {
  margin-bottom: 10px;
  margin-top: 10px;
}

.text--group span {
  color: rgb(158, 158, 158);
  font-size: 14px;
}

.text--group span:hover {
  color: orange;
}

.text--group p {
  /* font-size: 14px; */
  margin-top: 5px;
  color: rgb(60, 62, 68);
}

img {
  /* object-fit: cover; */
  height: 200px;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
}
</style>
