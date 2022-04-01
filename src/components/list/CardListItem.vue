<template>
  <div>
    <slot />
    <router-link
        v-if="link"
        :to="link"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardListItem',
  props: {
    large: {
      type: Boolean,
      required: false,
      default: false
    },
    link: {
      type: String
    }
  }
})
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 130px;
  height: 130px;

  position: relative;

  color: #EAE7AF;
  font-size: 25px;
  font-weight: 700;

  background-image: url("~/src/assets/img/home.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;

  cursor: pointer;
  transition-duration: 0.3s;
}

a {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
