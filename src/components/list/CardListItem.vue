<template>
  <li>
    <slot/>
    <router-link
        v-if="link"
        :to="link"
    />
  </li>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

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
li {
  padding: 60px;
  position: relative;

  text-align: center;

  color: #FFD700;
  font-size: 20px;
  background-image: url("~/src/assets/img/home.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(5, 5, 5, 0.1);

  cursor: pointer;
  transition-duration: 0.3s;
}

li:hover {
  transform: translateY(-7px);
}

a {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
