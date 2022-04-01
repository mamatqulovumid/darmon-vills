<template>
  <div class="section-item">
    <router-link :to="sectionLink" />
    <span>
      {{ section.name }}
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Section } from "@/data/sections";

export default defineComponent({
  name: 'SectionListItem',
  props: {
    section: {
      type: Object as PropType<Section>,
      required: true
    },
  },
  computed: {
    sectionLink (): string {
      return `/section/${this.section.id}`
    }
  }
});
</script>
