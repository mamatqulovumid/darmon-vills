<template>
  <ul class="card-list">
    <slot/>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardList"
})
</script>

<style>
.card-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
}

.card-list li {
  min-width: 150px;
  margin: 30px 20px;
}
</style>
