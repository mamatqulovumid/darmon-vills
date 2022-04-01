<template>
  <div class="card-list">
    <slot/>
  </div>
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
  align-content: center;
  justify-content: center;

  padding: 10px 0;

  height: 100%;
}

.card-list div {
  margin: 10px 20px;
}
</style>
