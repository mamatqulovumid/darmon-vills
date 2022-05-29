<template>
  <div
      class="house-item"
      :class="{'active': active}"
  >
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
    link: {
      type: String
    },
    active: {
      type: Boolean
    }
  }
})
</script>
