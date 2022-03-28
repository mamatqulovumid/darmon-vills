<template>
  <card-list-item
      :link="houseLink"
  >
    Дом: &#8470;{{ house.id }}
  </card-list-item>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {House} from "@/data/sections";
import CardListItem from "@/components/list/CardListItem.vue";

export default defineComponent({
  name: 'HouseListItem',
  components: {CardListItem},
  props: {
    house: {
      type: Object as PropType<House>,
      required: true
    }
  },
  computed: {
    houseLink(): string {
      return `/section/${this.house.section_id}/${this.house.id}`
    }
  }
})
</script>
