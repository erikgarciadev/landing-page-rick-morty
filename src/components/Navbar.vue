<template>
  <header>
    <div class="container">
      <nav>
        <div>
          <img alt="logo" src="../assets/logo.png" />
        </div>
        <div></div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  props: {},
});
</script>

<style scoped>
header {
  background: white;
  width: 100%;
  box-shadow: 0px 1px 10px #999;
}

nav {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  width: 80px;
  height: 80px;
}
</style>
