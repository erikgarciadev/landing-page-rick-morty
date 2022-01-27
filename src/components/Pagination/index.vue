<template>
  <div style="display: flex">
    <div
      :class="[{ arrow: true }, prevActive ? '' : 'disabled']"
      @click="onPage(page - 1)"
    >
      <i class="fa fa-chevron-left"></i>
    </div>
    <div v-if="pages < 5" class="wrapper-pages">
      <Numb
        @click="onPage(index + 1)"
        v-for="(_page, index) in Array.from(Array(pages))"
        :key="index"
        :value="index + 1"
        :active="page === index + 1"
      >
      </Numb>
    </div>
    <div v-else class="wrapper-pages">
      <Numb
        @click="onPage(_page)"
        v-for="(_page, index) in test"
        :key="index"
        :value="_page"
        :active="page === _page"
        :disabled="_page === '...'"
      >
      </Numb>
    </div>
    <div
      :class="[{ arrow: true }, nextActive ? '' : 'disabled']"
      @click="onPage(page + 1)"
    >
      <i class="fa fa-chevron-right"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Numb from "./Numb.vue";
export default defineComponent({
  name: "Pagination",
  components: {
    Numb,
  },
  props: {
    page: {
      type: Number,
      required: true,
      default: 1,
    },
    pages: {
      type: Number,
      required: true,
      default: 1,
    },
    prevActive: Boolean,
    nextActive: Boolean,
    onPrev: Function,
    onNext: Function,
    onPage: Function,
  },
  computed: {
    test() {
      if (this.$props.page === 1 || this.$props.page === 2) {
        return [1, 2, "..", this.$props.pages];
      }
      if (
        this.$props.page === this.$props.pages ||
        this.$props.page === this.$props.pages - 1
      ) {
        return [1, "..", this.$props.pages - 1, this.$props.pages];
      }
      if (
        this.$props.pages - this.$props.page > 2 ||
        this.$props.page - 1 > 0
      ) {
        return [1, "..", this.$props.page, "..", this.$props.pages];
      }
      return [];
    },
  },
});
</script>

<style scoped>
.wrapper-pages {
  display: flex;
  margin: 0 1em;
  align-items: center;
  justify-content: space-between;
}

.arrow {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}

.arrow.disabled {
  cursor: default;
  pointer-events: none;
  opacity: 0.5;
}
</style>
