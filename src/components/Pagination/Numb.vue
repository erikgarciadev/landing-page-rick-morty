<template>
  <div
    :class="[
      { numb: true },
      active ? 'active' : '',
      disabled ? 'disabled' : '',
    ]"
  >
    {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Numb",
  props: {
    value: {
      type: [Number, String],
      required: true,
    },
    active: Boolean,
    disabled: Boolean,
  },
});
</script>

<style scoped>
.numb {
  width: 27px;
  height: 27px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  color: #493f60;
  margin-left: 0.5em;
}

.numb.active {
  background: #e5e7eb;
  cursor: default;
  pointer-events: none;
}

.numb.disabled {
  cursor: default;
  pointer-events: none;
}
</style>
