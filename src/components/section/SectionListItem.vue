<template>
  <card-list-item
      :link="sectionLink">
      Секция: &#8470;{{ section.name }}
  </card-list-item>
</template>
<script lang="ts">

import {defineComponent, PropType} from 'vue';
import {Section} from "@/data/sections";
import CardListItem from "@/components/list/CardListItem.vue";

export default defineComponent({
  name: 'SectionListItem',
  components: {CardListItem},
  props: {
    section: {
      type: Object as PropType<Section>,
      required: true
    },
  },
  computed: {
    sectionLink(): string {
      return `/section/${this.section.id}`
    }
  }
});
</script>
