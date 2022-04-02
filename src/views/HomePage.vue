<template>
  <page-layout
      page-title="Durmon Villalari"
  >
    <card-list>
      <section-list-item
          v-for="section in sections"
          :key="section.id"
          :section="section"
      />
      <div class="section-item">
        <router-link to="others"></router-link>
        <span>Other</span>
      </div>
    </card-list>
  </page-layout>
</template>

<script lang="ts">
import SectionListItem from '@/components/section/SectionListItem.vue';
import { defineComponent } from 'vue';
import { getSections } from '@/data/sections';
import PageLayout from "@/components/page/PageLayout.vue";
import CardList from "@/components/list/CardList.vue";

export default defineComponent({
  name: 'HomePage',
  components: {
    PageLayout,
    SectionListItem,
    CardList
  },
  data () {
    return {
      sections: getSections()
    }
  }
});
</script>
